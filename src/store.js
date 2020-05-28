import Vue from 'vue'
import VueX, { mapActions } from 'vuex'

Vue.use(VueX)

export default new VueX.Store({
    state: {
        user: null
    },
    actions: {
        login(store, user) {
            store.state.user = user ? user : null
        }
    },
    mutations: {
        ...mapActions(['login'])
    }
})