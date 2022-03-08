import Vue from 'vue'
import Vuex from 'vuex'

const axios = require('axios');


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ports:[]
  },
  mutations: {
    setPorts(state, data){
      state.ports = data;
    }
  },
  actions: {
    getPorts({commit}){
      let url = "http://apitest.cargofive.com/api/ports";
      axios.get(url).then( response => {
        let data = response.data;
        if(response.status == 200){
          commit('setPorts', data);
        }else{
          console.log("Lo siento. No hemos podido procesar la data requerida.")
        }
      }).catch( error => {
        console.log("Error", error)
      })

    }
  },
  modules: {
  }
})
