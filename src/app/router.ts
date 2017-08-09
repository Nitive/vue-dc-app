import Vue from 'vue';
import VueRouter from 'vue-router';
import { RouteConfig } from 'vue-router/types/router';
import { SearchRoute } from './routes/search.route';
import { MapRoute } from './routes/map.route';
import { LayoutRoute } from './routes/layout.route';

Vue.use(VueRouter);

/**
 * application routes
 */
const routes: RouteConfig[] = [
  {
    path: '',
    component: LayoutRoute,
    children: [
      { path: '/map', name: 'map', component: MapRoute },
      { path: '/search', name: 'search', component: SearchRoute },
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
