<template lang="pug">
.row(:class='rowClasses')
  slot
</template>

<script>
export default {
  name: 'RowCmp',
  props: {
    rowClasses: { type: String, default: 'justify-content-between' },
  },
};
</script>
