import { ADD, DELETE } from './constants/types-mutation';
import { ADD_ACTION, DELETE_ACTION } from './constants/types-action';

let getData = (num) => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(num)
      }, num)
    });
};

const actions = {
  async [ADD_ACTION] ({ dispatch, commit }) {
    await dispatch(DELETE_ACTION);
    commit(ADD,await getData(2000));
  },
  async [DELETE_ACTION] ({ commit }) {
    commit(DELETE, await getData(3000));
  },
};

export default actions;
