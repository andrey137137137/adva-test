<template lang="pug">
article.card.services-card.services-card--form(:class='propColClasses')
  section.card-body
    h3.section-title.section-title--big.services-title Не знаєте що обрати?
    p.services-text Пройдіть тест і дізнайтеся, яка послуга вам більше підходить
    BtnCmp(classes='services-btn')
      | Почати тест
  figure.img_wrap.services-img
    img.img_wrap-img(src='@assets/img/form-sm-bg.png', alt='Форма')
</template>

<script>
import commonMixin from '@mixins/commonMixin';
import BtnCmp from '@cmp/BtnCmp';

export default {
  name: 'ServiceForm',
  mixins: [commonMixin],
  components: {
    BtnCmp,
  },
  props: {
    propColClasses: { type: String, default: '' },
  },
};
</script>
