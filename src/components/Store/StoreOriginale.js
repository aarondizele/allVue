import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0,
    value: 0
  },
  getters: { // get the value into function
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + ' clicks';
    },
    value: state => {
      return state.value;
    }
  },
  mutations: { // like a function
    increment: (state, payload )=> {
      return state.counter += payload;
    },
    decrement: (state, payload) => {
      return state.counter -= payload;
    },
    value: (state, payload) => {
      return state.value = payload;
    }
  },
  actions: { // like helper function
    // increment: context => {
    //   context.commit('increment')
    // }
    increment: ({ commit }, payload) => {
      commit('increment', payload);
    },
    decrement: ({ commit }, payload) => {
      commit('decrement', payload);
    },
    value: ({ commit }, payload) => {
      commit('value', payload);
    },
    asyncIncrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('increment', payload.by);
      }, payload.duration);
    },
    asyncDecrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('decrement', payload.by);
      }, payload.duration);
    }
  }
})
