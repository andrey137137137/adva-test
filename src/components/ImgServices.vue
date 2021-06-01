<template lang="pug">
SectionCmp(classes='img_services', :title='titles.service')
  OccasionCard(
    v-for='i in 3',
    :key='i',
    title='Сімейні спори',
    :imgTitle='i + 1'
  )
</template>

<script>
import commonMixin from '@mixins/commonMixin';
import SectionCmp from '@cmp/SectionCmp';
import OccasionCard from '@cmp/OccasionCard';

export default {
  name: 'ImgServices',
  mixins: [commonMixin],
  components: {
    SectionCmp,
    OccasionCard,
  },
};
</script>

<style lang="scss">
@import '@scssCmp/ImgServices';
</style>
