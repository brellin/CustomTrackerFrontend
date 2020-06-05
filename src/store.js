import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

export default new VueX.Store({
    state: {
        user: null,
        token: null
    },
    actions: {
        login(state, data) {
            const { token, user } = data;
            this.commit('setUser', user);
            this.commit('setToken', token);
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        }
    }
});