<template>
  <div class="hello">
    <tabs @click="handleClick" type="border-card" tabPosition="left">
      <tab-pane label="用户管理" name="a">
        <el-button slot="label">用户管理</el-button>
      </tab-pane>
      <tab-pane label="配置管理" name="b">
        <el-button>配置管理</el-button>
        <el-button>配置管理</el-button>
      </tab-pane>
      <tab-pane label="系统管理" name="c">
        <el-button>系统管理</el-button>
        <el-button>系统管理</el-button>
      </tab-pane>
    </tabs>
    <el-tabs></el-tabs>
  </div>
</template>

<script>
import tabs from "./tabs/tabs.vue";
import tabPane from "./tabs/tab-pane.vue";

export default {
  name: 'HelloWorld',
  components:{
    tabs,tabPane,
  },
  data () {
    return {
      items: [
        {text:'1'},
        {text:'2'}
      ],
      table:[
        {text:'one', name:'xiaoming', id:1},
        {text:'two', name:'xiaohong', id:2}
      ],
    }
  },
  methods: {
    handleClick(labels, names, index) {
      console.log('click', labels, names, index)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
