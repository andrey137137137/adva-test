<template lang="pug">
#app
  NavMenu(msg='Welcome to Your Vue.js App')
</template>

<script>
import NavMenu from '@components/NavMenu.vue';

export default {
  name: 'App',
  components: {
    NavMenu,
  },
};
</script>

<style lang="scss">
@import '@scss/app';
</style>
