import Vue from 'vue';
import { router } from './router';
import { store } from './store/store';
import { YmapsApi } from './ymaps/ymaps-api';
import { createYmapsVueMixin } from './ymaps/ymaps-mixin';

const ymapsApi = new YmapsApi();
Vue.mixin(createYmapsVueMixin(ymapsApi));

/**
 * view instance mount dom node selector
 */
const selector = '#dc-app';

/**
 * instantiate vue app with router
 */
new Vue({ router, store }).$mount(selector);
