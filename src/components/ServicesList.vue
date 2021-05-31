<template lang="pug">
SectionCmp(classes='package_services', :title='titles.packageService') 
  .col
    RowCmp
      ServiceCard(v-for='i in 4', :title='getTitle(i)')
  ServiceForm
</template>

<script>
import templateMixin from '@mixins/templateMixin';
import SectionCmp from '@cmp/SectionCmp';
import RowCmp from '@cmp/RowCmp';
import ServiceCard from '@cmp/ServiceCard';
import ServiceForm from '@cmp/ServiceForm';

export default {
  name: 'ServicesList',
  mixins: [templateMixin],
  components: {
    SectionCmp,
    RowCmp,
    ServiceCard,
    ServiceForm,
  },
  methods: {
    getTitle(index) {
      if (!index) {
        return 'Сімейні спори';
      }
      return 'Назва послуги ' + (index + 1);
    },
  },
};
</script>

<style lang="scss">
@import '@scssCmp/ServicesList';
</style>
