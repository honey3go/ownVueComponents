import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

import moduleA from '../components/grid/store';
import moduleB from '../components/tabs/store';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: ''
  },
  getters,
  mutations,
  actions,
  modules: {
    moduleA,
    b: moduleB,
  }
});

export default store;
