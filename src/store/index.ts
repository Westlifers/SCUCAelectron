import { createStore } from 'vuex'

const simulateData = {}

export default createStore({
  state: {
    ResultsOfHistory: {},  // 历史数据，只在打开app时更新
    ResultsOfThisWeek: {},  // 本周目前数据，在任何查看时都需要更新
    ResultOfThisUser: {},  // 用户数据，在任何查看时都需要更新
    UserData: {},  // 用户账号数据
    SCUCARecord: {}  // 社团记录，只在查看社团记录时更新
  },
  getters: {
  },
  mutations: {
    updateResultsOfThisWeek (state) {
      // 通过api获取数据
      state.ResultsOfThisWeek = simulateData
    }
  },
  actions: {
  },
  modules: {
  }
})
