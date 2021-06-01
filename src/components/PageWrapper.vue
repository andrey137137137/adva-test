<template lang="pug">
fragment
  NavMenu
  MainHeaderWrapper
  slot
</template>

<script>
import { Fragment } from 'vue-fragment';
import NavMenu from '@cmp/NavMenu';
import MainHeaderWrapper from '@cmp/MainHeaderWrapper';

export default {
  name: 'ViewIndex',
  components: {
    Fragment,
    NavMenu,
    MainHeaderWrapper,
  },
};
</script>
