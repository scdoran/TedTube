import Vue from 'vue';
import VueRouter from 'vue-router';

import TedAbout from '../views/TedAbout.vue';
import TedHome from '../views/TedHome.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: TedHome,
  },
  {
    path: '/about',
    name: 'about',
    component: TedAbout,
  },
  {
    path: '/search',
    name: 'search',
    props: r => ({ queryType: r.params.queryType, text: r.params.text }),
    component: () =>
      import(/* webpackChunkName: "search" */ '../views/TedSearch.vue'),
  },
  {
    path: '/view/:id',
    name: 'view',
    props: r => ({ video: r.params.video }),
    component: () =>
      import(/* webpackChunkName: "view" */ '../views/TedView.vue'),
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () =>
      import(/* webpackChunkName: "favorites" */ '../views/TedFavorites.vue'),
  },
  {
    path: '/watchlist',
    name: 'watchlist',
    component: () =>
      import(/* webpackChunkName: "watchlist" */ '../views/TedWatchList.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
