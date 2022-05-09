<template>
  <!--begin::Authentication -->
  <div class="d-flex flex-column flex-lg-row flex-column-fluid">
    <!--begin::Aside-->
    <div
      class="d-flex flex-column flex-lg-row-auto w-xl-600px bg-primary position-xl-relative"
    >
      <!--begin::Wrapper-->
      <div
        class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y"
      >
        <!--begin::Header-->
        <div
          class="d-flex flex-row-fluid flex-column flex-center text-center p-10 pt-lg-20"
        >
          <!--begin::Logo-->
          <a href="#" class="py-9 mb-10">
            <img
              alt="Logo"
              src="media/logos/mystride-logo-light-compact.svg"
              class="h-70px"
            />
          </a>
          <!--end::Logo-->

          <!--begin::Title-->
          <h1 class="fw-bolder fs-2qx pb-5 pb-md-10 text-white">
            mystride management
          </h1>
          <!--end::Title-->
        </div>
        <!--end::Header-->

        <!--begin::Illustration-->
        <div class="d-flex flex-row-auto flex-center">
          <img
            src="media/illustrations/stable.svg"
            alt=""
            class="h-200px h-lg-350px mb-10"
          />
        </div>
        <!--end::Illustration-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--begin::Aside-->

    <!--begin::Body-->
    <div class="d-flex flex-column flex-lg-row-fluid py-10">
      <!--begin::Content-->
      <div class="d-flex flex-center flex-column flex-column-fluid">
        <!--begin::Wrapper-->
        <div class="w-lg-600px p-10 p-lg-15 mx-auto">
          <router-view></router-view>
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Content-->

      <!--begin::Footer-->
      <div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
        <!--begin::Links-->
        <div class="d-flex flex-center fw-bold fs-6">
          <a href="#" class="text-muted text-hover-primary px-2" target="_blank"
            >About</a
          >

          <a href="#" class="text-muted text-hover-primary px-2" target="_blank"
            >Support</a
          >

          <a href="#" class="text-muted text-hover-primary px-2" target="_blank"
            >Purchase</a
          >
        </div>
        <!--end::Links-->
      </div>
      <!--end::Footer-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Authentication -->
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import { Actions } from '@/store/enums/StoreEnums';

export default defineComponent({
  name: 'base-layout',
  components: {},
  setup() {
    const store = useStore();

    onMounted(() => {
      //Add white bg color to the body tag
      store.dispatch(Actions.ADD_BODY_CLASSNAME, 'bg-white');
    });

    onUnmounted(() => {
      //Remove white bg color from the body tag
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, 'bg-white');
    });
  },
});
</script>
