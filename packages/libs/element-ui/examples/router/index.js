import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '',
    component: Layout,
    redirect: '/establish',
    name: '用户',
    hidden: false,
    meta: { title: '用户', icon: 'user' },
    children: [
      {
        path: 'establish',
        name: 'establish',
        component: () => import('@/views/user/establish'),
        meta: { title: '用户创建', icon: 'create', show: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
 export const asyncRoutes = [
  {
    path: '',
    component: Layout,
    redirect: '/establish',
    name: '用户',
    hidden: false,
    meta: { title: '用户', icon: 'user' },
    children: [
      {
        path: 'establish',
        name: 'establish',
        component: () => import('@/views/user/establish'),
        meta: { title: '用户创建', icon: 'create', show: true }
      }
    ]
  }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})
  
const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}


export default router