import * as service from '../services/service';

export default {
  namespace: 'user',
  state: {
    userList: [],
  },
  reducers: {
    saveUserList(state, { payload }) {
      return { ...state, userList: payload || [] };
    },
  },
  effects: {
    *init( { payload }, { call, put, select }) {
      {
        //获取用户信息
        const { response } = yield call(service.postCmd, '../user/getUserList.do');
        console.log('model user.js response:', response);
        yield put({ type: 'saveUserList', payload: response.data.userList });
      }
    },
    *addUser({ payload }, { call, put, select }) {
      const { response } = yield call(service.postCmd, '../user/addUser.do', payload);
      if (response.result == 'ok') {
        console.log('addUser response:', response);
        let userList = yield select(state => state.user.userList);
        userList.push(response.data.userList);
        yield put({ type: 'saveUserList', payload: Object.assign([], userList) });
      }
    },
    *editUser({ payload }, { call, put, select }) {
      const { response } = yield call(service.postCmd, '../user/editUser.do', payload);
      if (response.result == 'ok') {
        let userList = yield select(state => state.user.userList);
        console.log('editUser', response.data)
        for (let i = 0; i < userList.length; i++) {
          if (userList[i].id == response.data.user.id) {
            userList[i] = response.data.user;
            break;
          }
        }
        yield put({ type: 'saveUserList', payload: Object.assign([], userList) });
      }
    },
    *deleteUser({ payload }, { call, put, select }) {
      console.log('payload:', payload, payload.id);
      const { response } = yield call(service.postCmd, '../user/deleteUser.do', payload);
      let userList = yield select(state => state.user.userList);
      userList = userList.filter(user => user.id != payload.id);
      yield put({ type: 'saveUserList', payload: userList });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
      });
    }
  },
};
