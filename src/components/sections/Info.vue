<template>
  <div class="py-5">
    <!--begin::Information-->
    <div class="d-flex align-items-center rounded py-5 px-5 bg-light-warning">
      <span class="svg-icon svg-icon-3x svg-icon-warning me-5">
        <inline-svg src="media/icons/duotune/general/gen044.svg" />
      </span>
      <!--begin::Description-->
      <div class="text-gray-600 fw-bold fs-5"><slot></slot></div>
      <!--end::Description-->
    </div>
    <!--end::Information-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Info',
  components: {},
});
</script>
