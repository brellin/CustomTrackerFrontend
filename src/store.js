import Vue from 'vue'
import VueX, { mapActions } from 'vuex'

Vue.use(VueX)

export default new VueX.Store({
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