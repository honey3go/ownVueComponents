<template>
  <div class="tab-panel" v-show="isShow">
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
    },
  }
</script>
