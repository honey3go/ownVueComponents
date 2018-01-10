<template>
  <div class="tab-nav">
    <div
      :class="['nav-item', {'active': index === active}]"
      v-for="(label, index) in labels"
      @click="handleChangeTab(index)"
    >
      {{label}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabNav',
    props: {
      labels: {
        type: Array,
        required: true,
      },
      active: {
        type: Number,
        required: true,
      },
    },
    methods: {
      handleChangeTab(index) {
        this.$emit('handelClick',index)
      },
    }
  }
</script>

<style>
  .tab-nav {
    display: flex;
  }
  .nav-item {
    padding: 10px 20px;
    border: 1px solid rgb(228,231,237);
    margin-right: -1px;
    background-color: white;
  }
  .active{
    color: #409EFF;
    border-bottom: 0;
  }
</style>
