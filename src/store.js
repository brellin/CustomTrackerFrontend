import Vue from 'vue';
import VueX, { mapActions } from 'vuex';

Vue.use(VueX);

export default new VueX.Store({
    state: {
        user: null,
        token: null
    },
    actions: {
        login(state, data) {
            const { token, user } = data;
            state.token = token;
            state.user = user;
        }
    },
    mutations: {
        ...mapActions(['login'])
    }
});