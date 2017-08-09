import Vue from 'vue';
import Vuex from 'vuex';

/**
 * initialize vuex plugin
 */
Vue.use(Vuex);

/**
 * app store interface
 */
export interface AppState {
}

/**
 * default app state
 */
const state: AppState = {};

export const store = new Vuex.Store({
  state,
});
