import { MutationTree } from 'vuex';
import { AppState } from './state';

export const types = {
  startLoading: 'startLoading',
  stopLoading: 'stopLoading',
  setLastSearchedAddress: 'setLastSearchedAddress',
};

export const mutations: MutationTree<AppState> = {
  [types.startLoading](state) {
    state.loading = true;
  },
  [types.stopLoading](state) {
    state.loading = false;
  },
  [types.setLastSearchedAddress](state, locationData) {
    state.lastSearchedLocation = locationData;
  },
};
