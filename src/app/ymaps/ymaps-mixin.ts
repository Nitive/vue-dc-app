import { YmapsApi } from './ymaps-api';

export const createYmapsVueMixin = (ymapsApi: YmapsApi) => {
  return {
    created() {
      this.$ymaps = ymapsApi;
    },
  };
};
