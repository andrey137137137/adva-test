<template lang="pug">
section.section(:class='classes')
  .container.section-container
    RowCmp(:rowClasses='rowClasses')
      h2.section-title.section-title--big {{ title }}
      slot
</template>

<script>
import RowCmp from '@cmp/RowCmp';

export default {
  name: 'SectionCmp',
  components: {
    RowCmp,
  },
  props: {
    classes: { type: String, required: true },
    title: { type: String, required: true },
    rowClasses: { type: String, default: 'justify-content-between' },
  },
};
</script>
