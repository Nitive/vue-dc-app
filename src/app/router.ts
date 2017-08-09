import Vue from 'vue';
import VueRouter from 'vue-router';
import { RouteConfig } from 'vue-router/types/router';
import { DcSearchRoute } from './routes/search.route';
import { DcMapRoute } from './routes/map.route';
import { DcLayoutRoute } from './routes/layout.route';

Vue.use(VueRouter);

/**
 * application routes
 */
const routes: RouteConfig[] = [
  {
    path: '',
    component: DcLayoutRoute,
    children: [
      { path: '/map', name: 'map', component: DcMapRoute },
      { path: '/search', name: 'search', component: DcSearchRoute },
      { path: '/', redirect: { name: 'search' } },
    ],
  },
  { path: '*', redirect: '/' },
];

/**
 * router instance with config
 */
export const router = new VueRouter({
  mode: 'history',
  routes,
});
