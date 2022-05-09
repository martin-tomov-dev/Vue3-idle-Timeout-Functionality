<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Idle } from 'idlejs';

export default defineComponent({
  name: 'app',
  setup() {
    const route = useRoute();

    const idle = new Idle()
      .whenNotInteractive()
      .within(10)
      .do(() => console.log('logout'))
      .start();

    watch(
      () => route.meta.title,
      () => {
        document.title = ('management | ' + route.meta.title) as string;
      }
    );

    return { idle };
  },
});
</script>

<style lang="scss">
@import '~bootstrap-icons/font/bootstrap-icons.css';
@import '~@vueform/multiselect/themes/default.css';
@import '~prism-themes/themes/prism-shades-of-purple.css';
@import '~sweetalert2/dist/sweetalert2.css';
@import '~@fortawesome/fontawesome-free/css/all.min.css';

// Main demo style scss
@import 'assets/sass/plugins';
@import 'assets/sass/style';
</style>
