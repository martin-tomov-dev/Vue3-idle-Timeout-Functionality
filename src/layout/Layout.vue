<template>
  <KTLoader v-if="loaderEnabled" :logo="loaderLogo"></KTLoader>

  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
    <!-- begin:: Aside Left -->
    <KTAside
      :compact-logo="themeCompactLogo"
      :default-logo="themeDefaultLogo"
    ></KTAside>
    <!-- end:: Aside Left -->

    <div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
      <KTHeader></KTHeader>

      <!-- begin:: Content -->
      <div
        id="kt_content"
        class="content d-flex flex-column flex-column-fluid fs-6"
      >
        <!-- begin:: Content Body -->
        <div
          id="kt_content_container"
          :class="{
            'container-fluid': contentWidthFluid,
            container: !contentWidthFluid,
          }"
        >
          <router-view />
        </div>
        <!-- end:: Content Body -->
      </div>
      <!-- end:: Content -->
      <MSFooter></MSFooter>
    </div>
  </div>
  <!-- end:: Body -->
  <KTScrollTop></KTScrollTop>
  <KTPurchase></KTPurchase>
  <KTDrawerMessenger></KTDrawerMessenger>
  <KTUserMenu></KTUserMenu>
  <KTCreateAccountModal></KTCreateAccountModal>
  <KTNewCardModal></KTNewCardModal>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import KTAside from '@/layout/aside/Aside.vue';
import KTHeader from '@/layout/header/Header.vue';
import MSFooter from '@/layout/footer/Footer.vue';
import HtmlClass from '@/core/services/LayoutService';
import KTScrollTop from '@/layout/extras/ScrollTop.vue';
import KTUserMenu from '@/layout/header/partials/ActivityDrawer.vue';
import KTLoader from '@/components/Loader.vue';
import KTPurchase from '@/layout/extras/Purchase.vue';
import KTDrawerMessenger from '@/layout/extras/DrawerMessenger.vue';
import { Actions } from '@/store/enums/StoreEnums';
import {
  MenuComponent,
  DrawerComponent,
  ScrollComponent,
} from '@/assets/ts/components/index';
import { removeModalBackdrop } from '@/core/helpers/dom';
import KTCreateAccountModal from '@/components/modals/CreateAccountModal.vue';
import KTNewCardModal from '@/components/modals/NewCardModal.vue';
import {
  toolbarDisplay,
  loaderEnabled,
  contentWidthFluid,
  loaderLogo,
  asideEnabled,
  subheaderDisplay,
  themeDefaultLogo,
  themeCompactLogo,
} from '@/core/helpers/config';
import { isDocPage } from '@/core/helpers/documentation';

export default defineComponent({
  name: 'Layout',
  components: {
    KTAside,
    KTHeader,
    MSFooter,
    KTScrollTop,
    KTCreateAccountModal,
    KTNewCardModal,
    KTUserMenu,
    KTPurchase,
    KTDrawerMessenger,
    KTLoader,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    // show page loading
    store.dispatch(Actions.ADD_BODY_CLASSNAME, 'page-loading');

    // initialize html element classes
    HtmlClass.init();

    onMounted(() => {
      //check if current user is authenticated
      // if (!store.getters.isUserAuthenticated) {
      //   router.push({ name: 'authentication-base-sign-in' });
      // }

      DrawerComponent.updateAll();
      ScrollComponent.updateAll();
      MenuComponent.createInstances('[data-kt-menu="true"]');

      // Simulate the delay page loading
      setTimeout(() => {
        // Remove page loader after some time
        store.dispatch(Actions.REMOVE_BODY_CLASSNAME, 'page-loading');
      }, 500);
    });

    watch(
      () => route.path,
      () => {
        MenuComponent.updateDropdowns();

        setTimeout(() => {
          DrawerComponent.bootstrap();
          ScrollComponent.bootstrap();
          MenuComponent.createInstances('[data-kt-menu="true"]');
        }, 10);

        // // check if current user is authenticated
        if (store.getters.isAuthenticated) {
          router.push({ name: 'authentication-base-sign-in' });
        }

        removeModalBackdrop();
      }
    );

    return {
      toolbarDisplay,
      loaderEnabled,
      contentWidthFluid,
      loaderLogo,
      asideEnabled,
      subheaderDisplay,
      isDocPage,
      themeDefaultLogo,
      themeCompactLogo,
    };
  },
});
</script>
