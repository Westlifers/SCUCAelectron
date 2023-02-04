import {createStore} from 'vuex'

import { User } from '@/types'

export const SET_USER = 'setUser';
export const CLEAR_USER = 'clearUser'

export const initDefaultUserInfo = (): User => {
  let user: User = {
    id: 0,
    username: "",
    email: '',
    is_active: false,
    is_superuser: false,
  }
  if (window.sessionStorage.userInfo) {
    user = JSON.parse(window.sessionStorage.userInfo);
  }
  return user
}

export const store = createStore({
  state: {
    user: initDefaultUserInfo(),  // 用户数据
  },
  getters: {
  },
  mutations: {
    setUser(state: object | any, userInfo: object | any) {
      for (const prop in userInfo) {
        state[prop] = userInfo[prop];
      }
    },
    clearUser(state: object | any) {
      state.user = initDefaultUserInfo();
    },
  },
  actions: {
  },
  modules: {
  }
})
