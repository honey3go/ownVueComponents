<template>
  <div class="table">
    <div class="table-head">
      <slot></slot>
    </div>
    <div class="table-body">
      <div class="table-row" v-for="row in orderedData">
        <div class="table-cell"
             v-for="key in Object.keys(row)"
             :style="customizeWidth.data[key] && `flex-grow: 0; width:${customizeWidth.data[key]}px`"
        >
          {{row[key]}}
        </div>
        <div
          v-if="isCheckbox"
          class="table-cell table-cell-checkbox"
          :style="customizeWidth.checkbox && `flex-grow: 0; width:${customizeWidth.checkbox}px`"
          @click="changeCheckedList(row)"
        >
          <el-checkbox></el-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';
  import ElCheckbox from "../../../node_modules/element-ui/packages/checkbox/src/checkbox.vue";

  export default {
    components: {ElCheckbox},
    props:{
      data: {
        type: Array,
        required: true,
        default: [{}],
      },
    },
    data() {
     return {
       isCheckbox: true,
       customizeWidth: {
         data:{},
       },
       columnOrder: [],
       checkedList: [],
     };
    },
    computed:{
      orderedData() {
        const { data } = this;
        if (_.isEqual(Object.keys(data[0]), this.columnOrder)) {
          return data;
        }

        return data.map(item => {
          let newItem = {};
          for (let order of this.columnOrder) {
            newItem[order] = item[order];
          }
          return newItem;
        });
      },
      columnData() {
        const data = this.data;
        const keys = Object.keys(data[0]);
        const columnData = {};

        for (let key of keys) {
          let column =[];
          data.forEach(item => {
            column.push(_.pick(item, key)[key]);
          });
          columnData[key] = column;
        }

        return columnData;
      },
    },
    methods:{
      setCustomizeWidth(type, prop, width) {
        if (type==='checkbox'){
          this.$set(this.customizeWidth, type, width);
        }
        this.$set(this.customizeWidth.data, prop, width);
      },
      setColunmOrder(order){
        this.columnOrder.push(order);
      },
      changeCheckedList (row) {
        this.checkedList.push(row);
        console.log(this.checkedList)
      }
    },
  }
</script>

<style>
  .table-head {
    display: flex;
    padding: 10px 0;
    border-top: 1px solid rgb(228,231,237);
    border-bottom: 1px solid rgb(228,231,237);
  }
  .table-row {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid rgb(228,231,237);
  }
  .table-row:hover {
    background-color: rgb(228,231,237);
  }
  .table-cell {
    flex-grow: 1;
    width: 1px;
  }
  .table-cell-checkbox{
    order: -1;
  }
</style>
