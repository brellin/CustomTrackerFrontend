import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Router)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  state: {
    loggedIn: false
  },
  actions: {
    login(store, user) {
      if (user) store.state.loggedIn = true
      else store.state.loggedIn = false
    }
  },
  mutations: {
    ...mapActions(['login'])
  }
})

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
