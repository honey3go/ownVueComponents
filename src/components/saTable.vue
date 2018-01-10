<template>
  <div class="content">
    <div class="head"></div>
    <div class="body row">
      <slot :text="data"></slot>
      <!--<slot v-for="key in keys" :name="key" :text="data[key]"></slot>-->
    </div>
  </div>
</template>

<script>

  export default {
    name: 'saTable',
    props:['items'],
    data () {
      return {
        msg: ''
      }
    },
    computed:{
      keys(){
        return Object.keys(this.items[0]);
      },
      data(){
        let output = {};

        for (let key of this.keys) {
          if (!output.hasOwnProperty(key)) {
            output[key]=[];
          }

          for (let item of this.items) {
            output[key].push(item[key])
          }
        }
        return output;
      },
    },
  }
</script>

<style>
 .content {
   width:100%;
   height: 100%;
 }
  .body {
    width:100%;
    height:100%;
  }
  .row {
    display: flex;
    justify-content: center;
    align-content: center;
  }
</style>
