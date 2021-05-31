<template lang="pug">
SectionCmp(classes='job_stages', title='Етапи роботи')
  article.card(v-for='(title, index) in titles', :class='colClasses[4]')
    //- figure.img_wrap
    img.img_wrap-img(
      :src='pathes.img + "/job_stages/" + getImgTitle(index) + ".png"',
      :alt='getImgTitle(index)'
    )
    section.card-body
      h3.section-title {{ title }}
</template>

<script>
import templateMixin from '@mixins/templateMixin';
import SectionCmp from '@cmp/SectionCmp';

export default {
  name: 'IconOccasions',
  mixins: [templateMixin],
  components: {
    SectionCmp,
  },
  data() {
    return {
      titles: [
        'Обираєте пакет чи питання, яке Вас цікавить',
        'Залишаєте заявку на сайті',
        'Сплачуєте послуги на обираєте час консультації',
        'Отримуєте послугу',
      ],
    };
  },
  methods: {
    getImgTitle(index) {
      return index + 1;
    },
  },
};
</script>

<style lang="scss">
@import '@scssCmp/JobStages';
</style>
