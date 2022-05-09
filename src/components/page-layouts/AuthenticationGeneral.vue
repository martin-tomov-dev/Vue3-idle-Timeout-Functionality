<template>
  <div
    class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
    style="background-image: url(media/illustrations/dozzy-1/14.png)"
  >
    <!--begin::Content-->
    <div class="d-flex flex-column flex-column-fluid text-center p-10 py-lg-20">
      <!--begin::Logo-->
      <a href="#" class="mb-10 pt-lg-20">
        <img
          alt="Logo"
          src="media/logos/logo-default.svg"
          class="h-60px mb-5"
        />
      </a>
      <!--end::Logo-->

      <!--begin::Wrapper-->
      <div class="pt-lg-10">
        <router-view></router-view>
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Content-->

    <!--begin::Footer-->
    <div class="d-flex flex-center flex-column-auto p-10">
      <!--begin::Links-->
      <div class="d-flex align-items-center fw-bold fs-6">
        <a href="#" class="text-muted text-hover-primary px-2">About</a>

        <a href="#" class="text-muted text-hover-primary px-2">Contact</a>

        <a href="#" class="text-muted text-hover-primary px-2"> Purchase </a>
      </div>
      <!--end::Links-->
    </div>
    <!--end::Footer-->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import { Actions } from '@/store/enums/StoreEnums';

export default defineComponent({
  name: 'authentication-general',
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
