import Vue from 'vue';
import Vuex from 'vuex';
import { state, AppState } from './state';
import { mutations } from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state,
  mutations,
});

export type Store = Vuex.Store<AppState>;
export { types } from './mutations';
