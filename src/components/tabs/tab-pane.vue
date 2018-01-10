<template>
  <div class="tab-panel" v-show="isShow">
    <slot name="label"></slot>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tabPane',
    props: {
      label: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      }
    },
    computed: {
      isShow() {
        const { name, $parent: { names, active } } = this;
        return name === names[active];
      },
    },
    mounted() {
      const { label, name } = this;
      this.$parent.addData(label, name);
      console.log(this.$slots.label)
    },
  }
</script>

<style>
  .tab-panel {
    border: 1px solid rgb(228,231,237);
    padding: 20px;
    margin-top: -1px;
  }
</style>
