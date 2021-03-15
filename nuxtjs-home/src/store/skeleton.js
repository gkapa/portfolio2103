// Vuex

// State
// ex. this.$store.state.isHi
export const state = () => ({
  isHi: false,
  something: null,
  msg: "Hello"
});

// Getters
// ex. this.$store.getters.getMsg
export const getters = {
  getMsg(state) {
    return `${state.msg} => Length : ${state.msg.length}`;
  },
  authMode: (state, getters, rootState) =>
    rootState.auth.isAuthenticated ? "AMAZON_COGNITO_USER_POOLS" : "API_KEY"
};

// Mutations
// ex. this.$store.commit("changeMsg", "Hello, World!")
export const mutations = {
  set(state, { key, value }) {
    state[key] = value;
  },
  set(state, { param }) {
    state.isHi = !!something;
    state.something = param;
  },
  changeMsg(state, newMsg) {
    state.msg = newMsg;
  }
};

// Actions
// ex. this.$store.dispatch("skeleton/callMutation", { newMsg: "Hello, World!" })
export const actions = {
  callMutation({ commit }, { newMsg }) {
    commit("changeMessage", newMsg);
  },

  someAction({ dispatch, commit, getters, rootGetters }) {
    getters.someGetter; // -> 'foo/someGetter'
    rootGetters.someGetter; // -> 'someGetter'
    rootGetters["bar/someGetter"]; // -> 'bar/someGetter'

    dispatch("someOtherAction"); // -> 'foo/someOtherAction'
    dispatch("someOtherAction", null, { root: true }); // -> 'someOtherAction'

    commit("someMutation"); // -> 'foo/someMutation'
    commit("someMutation", null, { root: true }); // -> 'someMutation'
  }
};
