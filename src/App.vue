<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { SET_USERNAME } from './store/constants/types-mutation';

export default {
  name: 'app',
  methods: {
    ...mapMutations([
      SET_USERNAME
    ])
  },
  mounted() {
    this.SET_USERNAME();
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  * {
    box-sizing: border-box;
  }
</style>
