<template lang="pug">
SectionCmp(classes='package_services', :title='titles.packageService') 
  PackageService(
    v-for='item in items',
    :title='item.title',
    :price='item.price'
  )
</template>

<script>
import templateMixin from '@mixins/templateMixin';
import SectionCmp from '@cmp/SectionCmp';
import PackageService from '@cmp/PackageService';

export default {
  name: 'PackageServices',
  mixins: [templateMixin],
  components: {
    SectionCmp,
    PackageService,
  },
  data() {
    return {
      items: [
        { title: 'Базовий', price: 500 },
        { title: 'Бухгалтерський', price: 600 },
        { title: 'Преміум', price: 999 },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '@scssCmp/PackageServices';
</style>
