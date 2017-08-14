import { YmapsApi } from '../src/app/ymaps/ymaps-api'

declare module 'vue/types/vue' {
  interface Vue {
    $ymaps: YmapsApi;
  }
}
