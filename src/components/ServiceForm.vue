<template lang="pug">
article.card.services-card.services-card--form(:class='colClasses')
  section.card-body
    h3.section-title.section-title--big.services-title Не знаєте що обрати?
    p.services-text Пройдіть тест і дізнайтеся, яка послуга вам більше підходить
    BtnCmp(classes='services-btn')
      | Почати тест
  figure.img_wrap.services-img
    img.img_wrap-img(:src='pathes.img + "/form-sm-bg.png"', alt='Форма')
</template>

<script>
import templateMixin from '@mixins/templateMixin';
import BtnCmp from '@cmp/BtnCmp';

export default {
  name: 'ServiceForm',
  mixins: [templateMixin],
  components: {
    BtnCmp,
  },
  props: {
    colClasses: { type: String, required: true },
  },
};
</script>
