import { SET_USERNAME, RESET_USERNAME } from './constants/types-mutation'

export default {
  [SET_USERNAME] (state) {
    console.log(state)
    state.username ='jjj';
  }
};
