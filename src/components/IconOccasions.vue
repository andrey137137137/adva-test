<template lang="pug">
SectionCmp(classes='icon_occasions', :title='titles.occasion')
  OccasionCard(v-for='i in 6', :imgTitle='i + 1')
</template>

<script>
import templateMixin from '@mixins/templateMixin';
import SectionCmp from '@cmp/SectionCmp';
import PackageService from '@cmp/PackageService';

export default {
  name: 'IconOccasions',
  mixins: [templateMixin],
  components: {
    SectionCmp,
    PackageService,
  },
};
</script>

<style lang="scss">
@import '@scssCmp/IconOccasions';
</style>
