<template lang="pug">
nav.navbar.navbar-expand-lg.navbar-light.section.nav
  .container.section-container.nav-container
    //- a.navbar-brand.nav-logo(href='#')
    router-link.navbar-brand.nav-logo(to='/')
      img(src='@assets/svg/logo.svg', alt='Логотип')
    button.navbar-toggler(
      type='button',
      data-bs-toggle='collapse',
      data-bs-target='#navbarSupportedContent',
      aria-controls='navbarSupportedContent',
      aria-expanded='false',
      aria-label='Toggle navigation'
    )
      span.navbar-toggler-icon

    #navbarSupportedContent.collapse.navbar-collapse.nav-menu_wrap
      ul.navbar-nav.nav-menu
        li.nav-item
          //- a.nav-link.active(aria-current='page', href='#') Головна
          router-link.nav-link.active(aria-current='page', to='/long') Головна

        li.nav-item(v-for='(item, index) in items', :key='index')
          a.nav-link(href='#') {{ item }}

        //- li.nav-item
        //-   a.nav-link.disabled(href='#' tabindex='-1' aria-disabled='true')

    a.nav-lang(href='#')
      span !{'Ru '}
      span.text-muted / Ukr

    a.nav-login(href='#')
      img(src='@assets/svg/person.svg', alt='Войти')
</template>

<script>
import commonMixin from '@mixins/commonMixin';

export default {
  name: 'NavMenu',
  mixins: [commonMixin],
  data() {
    return {
      items: ['Галузi права', 'Пакетнi послуги', 'Блог', 'Документи'],
    };
  },
};
</script>

<style lang="scss">
@import '@scssCmp/NavMenu';
</style>
