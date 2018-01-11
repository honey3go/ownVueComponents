<template>
  <div :class="['tabs',`tabs-${tabPosition}`]" >
    <div class="tab-nav-wrap">
      <tab-nav
        class="tab-position-left"
        :labels="labels"
        :active="active"
        :type="type"
        :tabPosition="tabPosition"
        @handelClick="changeTab"
      >
        <slot name="label"></slot>
      </tab-nav>
    </div>
    <div :class="['tab-panel-wrap',`tab-panel-wrap-${tabPosition}`]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import tabNav from './tab-nav.vue';
  export default {
    name: 'tabs',
    props: {
      intialActive: String,
      type: {
        type: String,
        default: 'border-card',
      },
      tabPosition: {
        type: String,
        default: 'top',
      }
    },
    components: {
      tabNav
    },
    data () {
      return {
        labels: [],
        names: [],
        active: 0,
      }
    },
    methods: {
      indexInArr (content, arr) {
        return arr.findIndex(item => item === content);
      },
      initActive () {
        const { intialActive, names, indexInArr } = this;
        if (intialActive) {
          const index = indexInArr(intialActive, names);
          this.active = index > -1 ? index : this.active;
        }
      },
      addData (label, name) {
        const { labels, names, indexInArr } = this;
        labels.push(label);
        if (indexInArr(name, names) > -1) {
          throw Error('name of tab-pane must be unique')
        }
        names.push(name);
      },
      changeTab (index) {
        const { labels, names } = this;
        this.active = index;
        this.$emit('click', labels, names, index)
      },
    },
    mounted () {
      this.initActive();
    },
  }
</script>

<style>
  .tabs {
    display: flex;
    flex-direction: column;
  }
  .tabs-bottom {
    flex-direction: column-reverse;
  }
  .tabs-left {
    flex-direction: row;
  }
  .tabs-right {
    flex-direction: row-reverse;
  }
  .tab-panel-wrap {
    flex-grow: 1;
    padding: 20px;
    height: 500px;
  }
  .tab-panel-wrap-top {
    border-top: 1px solid rgb(228,231,237);
  }
  .tab-panel-wrap-bottom {
    border-bottom: 1px solid rgb(228,231,237);
  }
  .tab-panel-wrap-left {
    border-left: 1px solid rgb(228,231,237);
  }
  .tab-panel-wrap-right {
    border-bottom: 1px solid rgb(228,231,237);
  }
</style>
