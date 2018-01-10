<template>
  <div class="tabs">
    <div class="tab-nav-wrap">
      <tab-nav
        class="tab-position-left"
        :labels="labels"
        :active="active"
        :type="type"
        :tabPosition="tabPosition"
        @handelClick="changeTab"
      >
      </tab-nav>
    </div>
    <div class="tab-panel-wrap">
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
        default: 'card',
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
