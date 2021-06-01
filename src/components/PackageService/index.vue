<template lang="pug">
article.card.bg-white.package_services-card
  h3.section-title.section-title--big.package_services-sub_title {{ title }}
  section.card-body
    h4.section-title.section-title--big.package_services-price
      PckgSub(v-if='cond')
      | {{ calcPrice }}
    ul.list.package_services-list
      PckgItem(
        v-for='(item, index) in items',
        :key='index',
        :title='item',
        :value='itemValue',
        :disabled='itemCond(index)'
      )
    BtnCmp(classes='package_services-btn')
      | Замовити
</template>

<script>
import commonMixin from '@mixins/commonMixin';
import PckgSub from './PckgSub';
import PckgItem from './PckgItem';
import BtnCmp from '@cmp/BtnCmp';

export default {
  name: 'ServiceForm',
  mixins: [commonMixin],
  components: {
    PckgSub,
    PckgItem,
    BtnCmp,
  },
  props: {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    count: { type: Number, default: 0 },
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    cond() {
      return this.count > 0;
    },
    calcPrice() {
      return this.price + ' грн';
    },
    items() {
      return this.cond
        ? this.list
        : ['Усні медичні консультації', 'Усні юридичні консультації'];
    },
    itemValue() {
      return this.cond ? 1 : 4;
    },
  },
  methods: {
    itemCond(index) {
      return this.cond && index >= this.count;
    },
  },
};
</script>
