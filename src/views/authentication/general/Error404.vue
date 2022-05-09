<template>
  <!--begin::Logo-->
  <h1 class="fw-bolder fs-4x text-gray-700 mb-10">Page Not Found</h1>
  <!--end::Logo-->

  <!--begin::Message-->
  <div class="fw-bold fs-3 text-gray-400 mb-15">
    The page you looked not found! <br />
    Plan your blog post by choosing a topic
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
  name: 'kt-error-404',
  components: {},
});
</script>
