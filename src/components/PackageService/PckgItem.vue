<template lang="pug">
//- li.row(class = {'disabled': disabled})
li.row.d-flex.list-item(:class='{ "text-muted": disabled }')
  .col-10 {{ title }}
  .col.text-end {{ value }}
</template>

<script>
export default {
  name: 'PckgItem',
  props: {
    title: { type: String, required: true },
    value: { type: Number, required: true },
    disabled: { type: Boolean, default: false },
  },
};
</script>
