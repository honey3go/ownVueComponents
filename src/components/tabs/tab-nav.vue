<template>
  <div :class="['tab-nav', `tab-nav-${type}`, `tab-nav-${tabPosition}`]">
    <div
      :class="['nav-item',
               `nav-item-${type}`,
               `nav-item-${tabPosition}`,
               index === active ? `active active-${type}-${tabPosition}` :'']"
      v-for="(label, index) in labels"
      @click="handleChangeTab(index)"
    >
      {{ label }}
    </div>
    <div class="nav-static"></div>
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
    },
  }
</script>

<style>
  .tab-nav {
    display: flex;
  }
  .nav-static {
    flex-grow: 1;
  }
  .tab-nav-right, .tab-nav-left {
    flex-direction: column;
    height: 100%;
  }
  .nav-item {
    padding: 10px 20px;
    cursor: pointer;
  }
  .nav-item-left {
    border-right: 2px solid white;
  }
  .nav-item-right {
    border-left: 2px solid white;
  }
  .nav-item-top {
    border-bottom: 2px solid white;
  }
  .nav-item-bottom {
    border-top: 2px solid white;
  }
  .active {
    color: #409EFF;
    background-color: #f2f9fc;
  }
  .active-border-card-top {
    border-bottom-color: #409EFF;
  }
  .active-border-card-bottom {
    border-top: 2px solid #409EFF;
  }
  .active-border-card-left {
    border-right-color: #409EFF;
  }
  .active-border-card-right {
    border-left: 2px solid #409EFF;
  }
</style>
