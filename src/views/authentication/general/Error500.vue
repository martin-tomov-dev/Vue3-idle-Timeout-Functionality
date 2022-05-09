<template>
  <!--begin::Logo-->
  <h1 class="fw-bolder fs-4x text-gray-700 mb-10">System Error</h1>
  <!--end::Logo-->

  <!--begin::Message-->
  <div class="fw-bold fs-3 text-gray-400 mb-15">
    Something went wrong! <br />
    Please try again later.
  </div>
  <!--end::Message-->

  <!--begin::Action-->
  <div class="text-center">
    <router-link to="/dashboard" class="btn btn-lg btn-primary fw-bolder"
      >Go to homepage</router-link
    >
  </div>
  <!--end::Action-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'kt-error-500',
  components: {},
});
</script>
