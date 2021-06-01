<template lang="pug">
article.section.main
  .container.section-container.main-container
    .row.main-row
      figure.img_wrap.main-img
        img.img_wrap-img(src='@assets/img/main.png', alt='Смартфон')
      .col.col-8.main-text
        h1.section-title.section-title--large
          | Юридична допомога
          br
          | на будь-які випадки online
        h2.section-title.section-title--big.main-sub_title Маємо багатий досвід в напрямках:
        ul.list.list--dotted.main-list
          each item in ['сімейні спори', 'житлові спори', 'фінансові та кредитні спори']
            li.list-item= item
        BtnCmp(classes='btn--high')
          | Інші напрямки та послуги
</template>

<script>
import commonMixin from '@mixins/commonMixin';
import BtnCmp from '@cmp/BtnCmp';

export default {
  name: 'MainHeaderWrapper',
  mixins: [commonMixin],
  components: {
    BtnCmp,
  },
};
</script>

<style lang="scss">
@import '@scssCmp/MainHeaderWrapper';
</style>
