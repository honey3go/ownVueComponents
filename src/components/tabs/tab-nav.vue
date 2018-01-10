<template>
  <div :class="['tab-nav', type]">
    <div
      :class="['nav-item',
               `nav-item-${type}`,
               {'active': index === active},
               {'active-border-card': type === 'border-card' && index === active}]"
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
      type: {
        type: String,
        required: true,
      },
      tabPosition: {
        type: String,
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
    cursor: pointer;
  }
  .nav-item-card {
    border: 1px solid rgb(228,231,237);
    margin-right: -1px;
  }
  .nav-item-card:first-child {
    border-top-left-radius: 8px;
  }
  .nav-item-card:last-child {
    border-top-right-radius: 8px;
  }
  .active {
    color: #409EFF;
    background-color: white;
    border-bottom: 0;
  }
  .border-card {
    color: rgb(144,147,153);
    background-color: rgb(245,247,250);
    border: 1px solid rgb(228,231,237);
  }
  .active-border-card {
    border: 1px solid rgb(228,231,237);
    border-top: 0;
    border-bottom: 0;
    margin-bottom: -1px;
    margin-left: -1px;
  }
</style>
