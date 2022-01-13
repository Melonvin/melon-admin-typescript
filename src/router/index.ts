import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

/**
 * baseRoutes
 * 不用权限的路由
 */
export const baseRoutes: Array<RouteConfig> = [
  {
    path: '/login',
    component: () => import('@/views/system/login/index.vue')
  }
]

const router = new VueRouter({
  routes: baseRoutes
})

export default router
