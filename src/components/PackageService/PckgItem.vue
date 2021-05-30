<template lang="pug">
//- li.row(class = {'disabled': disabled})
li.row.d-flex.list-item(:class='{ "text-muted": disabled }')
  .col-10 {{ key }}
  .col.text-end {{ value }}
</template>

<script>
export default {
  name: 'PckgItem',
  props: {
    key: { type: String, required: true },
    value: { type: String, required: true },
    disabled: { type: Boolean, default: false },
  },
};
</script>
