<template>
  <div class="head-item" :style="width && `flex-grow: 0; width:${width}px`">
      {{label}}
  </div>
</template>

<script>
  export default {
    props: {
      label: String,
      prop: String,
      width: String,
    },
    mounted() {
      const { prop, width } = this;
      this.$parent.setColunmOrder(prop);
      if (width) {
        this.$parent.setCustomizeWidth(prop, width);
      }
    }
  }
</script>

<style>
  .head-item {
    flex-grow: 1;
    border: 1px solid black;
    width: 1px;
  }
</style>
