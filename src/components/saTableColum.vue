<template>
  <div class="cell" @click="gg">
    <div v-for="p in prop" class="border" @click="co">
      {{p}}
      <slot></slot>
      <!--  <slot name="prop"></slot>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'saTable',
    props:['prop'],
    data () {
      return {
        msg: ''
      }
    },
    methods: {
      co(){
        console.log('cell')
      },
      gg(){
        console.log('cl')
      },
    },
  }
</script>

<style>
  .cell {
    flex-grow: 1;
  }
  .border {
    border: 1px solid black;
  }
</style>
