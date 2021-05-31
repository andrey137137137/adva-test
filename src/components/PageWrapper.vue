<template lang="pug">
fragment
  NavMenu
  MainHeaderWrap
  slot
</template>

<script>
import { Fragment } from 'vue-fragment';
import NavMenu from '@cmp/NavMenu';
import MainHeaderWrap from '@cmp/MainHeaderWrap';

export default {
  name: 'ViewIndex',
  components: {
    Fragment,
    NavMenu,
    MainHeaderWrap,
  },
};
</script>
