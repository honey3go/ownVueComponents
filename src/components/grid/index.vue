<template>
  <div class="table">
    <div class="table-head">
      <slot></slot>
    </div>
    <div class="table-body">
      <div class="table-row" v-for="row in orderedData">
        <div class="table-cell"
             v-for="key in Object.keys(row)"
             :style="customizeWidth[key] && `flex-grow: 0; width:${customizeWidth[key]}px`"
        >
          {{row[key]}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';

  export default {
    props:{
      data: {
        type: Array,
        required: true,
        default: [{}],
      },
    },
    data() {
     return {
       customizeWidth: {},
       columnOrder: [],
     };
    },
    computed:{
      orderedData() {
        if (_.isEqual(Object.keys(this.data[0]), this.columnOrder)) {
          return this.data;
        }

        const data = _.cloneDeep(this.data);
        return data.map(item => {
          let newItem = {};
          for (let order of this.columnOrder) {
            newItem[order] = item[order];
          }
          return newItem;
        });
      },
    },
    methods:{
      setCustomizeWidth(prop, width) {
        this.$set(this.customizeWidth, prop, width);
      },
      setColunmOrder(order){
        this.columnOrder.push(order);
      },
    },
  }
</script>

<style>
  .table-head {
    display: flex;
  }
  .table-row {
    display: flex;
  }
  .table-row:hover {
    background-color: rgb(228,231,237);
  }
  .table-cell {
    flex-grow: 1;
    border: 1px solid black;
    width: 1px;
  }
</style>
