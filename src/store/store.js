import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    userInfo:null,
  },
  mutations: {
    setUserInfo:(state,model)=>{
      state.userInfo=model
    }
  },
  actions:{
    setUserInfo:({commit},model)=>{
       commit('setUserInfo',model)
    }
  }
})

export default store
