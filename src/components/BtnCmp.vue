<template lang="pug">
a.btn.btn-primary(:class='classes', href='#')
  slot
</template>

<script>
export default {
  name: 'BtnCmp',
  props: {
    classes: { type: String, required: true },
  },
};
</script>
