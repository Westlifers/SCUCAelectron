import {createStore} from 'vuex'

import {User} from '@/types'
import {ElNotification} from "element-plus";

export const SET_USER = 'setUser';
export const CLEAR_USER = 'clearUser'

export const initDefaultUserInfo = (): User => {
  return {
    id: 0,
    username: "",
    email: '',
    is_active: false,
    is_superuser: false,
  }
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
      ElNotification({
        title: '成功',
        message: '登出成功！',
        type: 'success',
      })
    },
  },
  actions: {
  },
  modules: {
  }
})
