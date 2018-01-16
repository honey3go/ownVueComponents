import { ADD, DELETE } from './constants/types-mutation';

const mutations = {
  [ADD] ( state, num ) {
    state.grid = state.grid + num;
  },
  [DELETE] (state, num) {
    state.grid = state.grid - num;
  },
};

export default mutations;
