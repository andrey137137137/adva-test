<template lang="pug">
SectionCmp(classes='occasions', :title='titles.occasion')
  div(:style='{ height: "300px", background: "pink" }')
  OccasionCard(
    :imgTitle='getImgName(1)',
    :title='"Заголовок " + getImgName(1)'
  )
    //- v-for='i in 4',
    //- :key='i',
</template>

<script>
import commonMixin from '@mixins/commonMixin';
import SectionCmp from '@cmp/SectionCmp';
import OccasionCard from '@cmp/OccasionCard';

export default {
  name: 'OccasionsList',
  mixins: [commonMixin],
  components: {
    SectionCmp,
    OccasionCard,
  },
  methods: {
    getImgName(index) {
      return index.toString();
    },
  },
};
</script>

<style lang="scss">
@import '@scssCmp/OccasionsList';
</style>
