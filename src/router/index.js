import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue')
  },
  {
    path: '/Infos',
    name: 'infos',
    component: () => import(/* webpackChunkName: "infos" */ '../pages/InfoMovie.vue')
  },
  {
    path: '/Favorites',
    name: 'favorites',
    component: () => import(/* webpackChunkName: "favorites" */ '../pages/Favorites.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
