<template lang="pug">
SectionCmp(classes='package_services', :title='titles.packageService') 
  PackageService(
    v-for='(item, index) in items',
    :key='index',
    :title='item.title',
    :price='item.price'
  )
</template>

<script>
import commonMixin from '@mixins/commonMixin';
import SectionCmp from '@cmp/SectionCmp';
import PackageService from '@cmp/PackageService';

export default {
  name: 'PackageServices',
  mixins: [commonMixin],
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
