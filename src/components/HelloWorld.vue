<template>
  <div class="hello">
    <!--pagination demo-->
    <pagination :total="16"
                :splitNum="9"
                @handleClickPage="changePage"
    >
    </pagination>
    <!--grid demo-->
    <grid :data="table">
      <grid-column type="checkbox"></grid-column>
      <grid-column label="ID" prop="id" width="20"></grid-column>
      <grid-column label="姓名" prop="name"></grid-column>
      <grid-column label="描述" prop="text"></grid-column>
    </grid>
    <!--tabs demo-->
    <tabs @click="handleClick" type="border-card" tabPosition="left">
      <tab-pane label="用户管理" name="a">
        <el-button>用户管理</el-button>
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
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { ADD_ACTION } from './grid/store/constants/types-action';

import tabs from "./tabs";
import tabPane from "./tabs/tab-pane";

import grid from './grid';
import gridColumn from './grid/grid-column';

import pagination from './pagination';
export default {
  name: 'HelloWorld',
  components:{
    tabs,tabPane,grid,gridColumn,pagination
  },
  data () {
    return {
      items: [
        {text:'1'},
        {text:'2'}
      ],
      table:[
        {text:'one', name:'xiaoming', id:1},
        {text:'two', name:'xhong', id:2}
      ],
    }
  },
  methods: {
    ...mapActions([
      ADD_ACTION,
    ]),
    handleClick(labels, names, index) {
      console.log('click', labels, names, index)
    },
    changePage(n) {
      console.log(n)
    },
  },
  mounted () {
    console.log('before')
    this.ADD_ACTION().then(() => {
      console.log('after')
    });
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
  .red{
    color: red;
  }
</style>
