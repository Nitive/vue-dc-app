import Vue from 'vue';
import { router } from './router';
import { store } from './store/store';

/**
 * view instance mount dom node selector
 */
const selector = '#dc-app';

/**
 * instantiate vue app with router
 */
new Vue({ router, store }).$mount(selector);
