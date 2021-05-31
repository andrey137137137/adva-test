<template lang="pug">
SectionCmp(classes='occasions', :title='titles.occasion')
  OccasionCard(
    v-for='i in 4',
    :imgTitle='i + 1',
    :title='"Заголовок " + (i + 1)'
  )
</template>

<script>
import templateMixin from '@mixins/templateMixin';
import SectionCmp from '@cmp/SectionCmp';
import OccasionCard from '@cmp/OccasionCard';

export default {
  name: 'OccasionsList',
  mixins: [templateMixin],
  components: {
    SectionCmp,
    OccasionCard,
  },
};
</script>

<style lang="scss">
@import '@scssCmp/OccasionsList';
</style>
