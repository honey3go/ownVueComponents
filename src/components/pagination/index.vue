<template>
  <div class="pagination">
    <div class="pagination-page-content">
      <div class="pagination-btn"
           :class="{'disable-wrapper': active === 1}">
        <button :class="{'btn-disabled': active === 1}"
                @click="handleClickPage(active - 1)"
        >
          <
        </button>
      </div>
      <div class="pagination-content">
        <div class="pagination-content-item"
             v-for="n in paginationNum"
             :class="{'pagination-active': n === active}"
             @click="handleClickPage(n)"
        >
          {{n}}
        </div>
      </div>
      <div class="pagination-btn"
           :class="{'disable-wrapper': active === total}"
      >
        <button :class="{'btn-disabled': active === total}"
                @click="handleClickPage(active + 1)"
        >
          >
        </button>
      </div>
    </div>
    <div class="pagination-page-size" v-if="isShowSize">
      {{`${pageSize}条/页`}}
    </div>
    <div class="pagination-page-goto" v-if="isShowGoto">
      <div class="pagination-goto">
        <input v-model.number="gotoPage"
               type="number"
               @change="handleGotoPage($event)"
               :placeholder=5
        />
      </div>
    </div>
  </div>
</template>

<script>
  import range from '../../utils/range';

  export default {
    props: {
      total: {
        type: Number,
        require: true,
      },
      splitNum: {
        type: Number,
        default: 9
      },
      pageSize: {
        type: Number,
        default: 10,
      },
      layout: {
        type: String,
        default: 'page,size,goto'
      }
    },
    data() {
      return {
        active: 1,
        gotoPage: '',
      };
    },
    computed: {
      paginationNum() {
        const { total, splitNum, active } = this;
        const median = Math.ceil(splitNum / 2);
        let start = 1,
            length = 1;

        if ( splitNum > total ) {
          length = total;
        } else {
          length = splitNum;
          if (active > total - median) {
            start = total - splitNum + 1;
          } else if (active <= total - median && active > median ) {
            start = active - median + 1;
          }
        }
        return range(start, length);
      },
      isShowSize() {
        return this.layout.includes('size');
      },
      isShowGoto() {
        return this.layout.includes('goto');
      },
    },
    methods: {
      getFormatNumber(num, start, end) {
        if ( Number.isNaN(num) || num <= start ){
          return start;
        } else if (num >= end) {
          return end
        }
        return num;
      },
      handleClickPage(n) {
        if (this.active !== n) {
          this.active = n;
          this.$emit('handleClickPage', n);
        }
      },
      handleGotoPage(event){
        this.gotoPage = this.getFormatNumber(Number.parseInt(event.target.value), 1, this.total);
        this.handleClickPage(this.gotoPage);
      },
    },
  };
</script>

<style>
  .pagination {
    margin: 10px 0;
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
  }
  .pagination-page-content {
    display: flex;
  }
  .pagination-content {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .pagination-content-item, .pagination-btn, .pagination-page-size, .pagination-goto {
    min-width: 32px;
    height: 32px;
    margin: 0 5px;
    padding: 0 10px;
    line-height: 32px;
    border: 1px solid rgb(228,231,237);
    border-radius: 4px;
    cursor: pointer;
  }
  .pagination button {
    display: block;
    height: 100%;
    width: 100%;
    padding: 0;
    border: 0;
    border-radius: inherit;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    font-weight: normal;
  }
  .pagination input {
    display: block;
    height: 100%;
    width: 32px;
    padding: 0;
    border: 0;
    border-radius: inherit;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    font-weight: normal;
    text-align: center;
  }
  .pagination-active {
    color: #fff;
    background-color: #409EFF;
    border-color: #409EFF;
  }
  .disable-wrapper {
    cursor: not-allowed;
  }
  .btn-disabled {
    pointer-events: none;
    color: rgb(228,231,237);
  }
  .pagination-page-goto {
    display: flex;
    margin: 0 10px;
  }
  .pagination-page-goto::before {
    content: '跳至';
    line-height: 32px;
  }
  .pagination-page-goto::after {
    content: '页';
    line-height: 32px;
  }


  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;	/* 有无看不出差别 */
  }
</style>
