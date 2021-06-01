<template lang="pug">
article.card.bg-white.services-card
  //- figure.img_wrap
  img.img_wrap-img(
    v-if='imgTitle',
    :src='pathes.img + "/img_services/" + imgTitle + ".jpg"',
    alt=imgTitle
  )
  section.card-body
    h3.section-title.services-title {{ title }}
    ul.list.list--dotted.services-list
      li.list-item(v-for='(item, index) in list') {{ getItemPrefix(index) + item }}
    BtnCmp(v-if='imgTitle')
      | Більше послуг &gt;
</template>

<script>
import commonMixin from '@mixins/commonMixin';
import BtnCmp from '@cmp/BtnCmp';

export default {
  name: 'ServiceCard',
  mixins: [commonMixin],
  components: {
    BtnCmp,
  },
  props: {
    title: { type: String, required: true },
    imgTitle: { type: String, default: '' },
  },
  data() {
    return {
      shortList: ['', ', детальна інформація', ', інформація', ''],
      longList: [
        'Визначення порядку участі у вихованні та утриманні дитини',
        'Визнання (оскарження) права на батьківство',
        'Усунення перешкод у спілкуванні з дітьми, онуками',
        'Розроблення договору про добровільну сплату аліментів',
        'Розроблення шлюбного договору',
        'Представництво інтересів під час вирішення сімейних спорів у судах, органах опіки та піклування',
      ],
    };
  },
  computed: {
    list() {
      return this.imgTitle ? this.longList : this.shortList;
    },
  },
  methods: {
    getItemPrefix(index) {
      return this.imgTitle ? '' : 'Пункт ' + (index + 1);
    },
  },
};
</script>
