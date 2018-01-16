<template>
  <div class="head-item" :style="width && `flex-grow: 0; width:${width}px`">
    <!--<slot :column="this.$parent.columnData"></slot>-->
    <div v-if="type === 'checkbox'">
      <el-checkbox></el-checkbox>
    </div>
    <div v-else>{{label}}</div>
    <slot></slot>
  </div>
</template>

<script>

  export default {
    props: {
      label: String,
      prop: String,
      width: String,
      type: {
        type: String,
        default: 'text',
      },
    },
    mounted() {
      const { prop, width, type } = this;
      if (prop) {
        this.$parent.setColunmOrder(prop);
      }
      if (width) {
        this.$parent.setCustomizeWidth(type, prop, width);
      }
    }
  }
</script>

<style>
  .head-item {
    flex-grow: 1;
    width: 1px;
  }
</style>
