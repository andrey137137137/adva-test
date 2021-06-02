<template lang="pug">
SectionCmp(classes='services', :title='titles.service') 
  .col
    RowCmp
      ServiceCard(v-for='i in 4', :key='i', :title='getTitle(i)')
  ServiceForm
</template>

<script>
import commonMixin from '@mixins/commonMixin';
import SectionCmp from '@cmp/SectionCmp';
import RowCmp from '@cmp/RowCmp';
import ServiceCard from '@cmp/ServiceCard';
import ServiceForm from '@cmp/ServiceForm';

export default {
  name: 'ServicesList',
  mixins: [commonMixin],
  components: {
    SectionCmp,
    RowCmp,
    ServiceCard,
    ServiceForm,
  },
  methods: {
    getTitle(index) {
      if (!(index - 1)) {
        return 'Сімейні спори';
      }
      return 'Назва послуги ' + index;
    },
  },
};
</script>

<style lang="scss">
@import '@scssCmp/ServicesList';
</style>
