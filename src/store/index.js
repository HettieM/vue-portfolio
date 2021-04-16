import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    displayCard: false,
  },
  getters: {
    displayCard: (state) => state.displayCard,
  },
  actions: {
    
  },
  mutations: {
    setDisplayCard(state, payload) {
      state.displayCard = payload;
    }
  }
});

export default store;
