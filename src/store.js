import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    listData: state => state.listData,
    selectData: state => state.listData[state.selectindex],
    selectindex: state => state.selectindex
  },
  state: {
    listData: [
      { title: "演講筆記1", main: "<h2>第二屆終於結束啦~~~</h2>" },
      { title: "演講筆記2", main: "test2" },
      { title: "演講筆記3", main: "test3" },
      { title: "演講筆記4", main: "test4" }
    ],
    selectData:{},
    selectindex:0
  },
  mutations: {
    savenewmain(state,req){
      state.listData[state.selectindex].main=req
    },
    changeIndex(state,req){
      state.selectindex=req
    }
  },
  actions: {

  }
})
