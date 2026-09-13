import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { title: '首页', isShowNav: false, isShowBack: false }
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../pages/Category.vue'),
      meta: { title: '分类', isShowNav: true, isShowBack: false }
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../pages/Message.vue'),
      meta: { title: '消息', isShowNav: true, isShowBack: false }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../pages/Cart.vue'),
      meta: { title: '购物车', isShowNav: true, isShowBack: true }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../pages/User.vue'),
      meta: { title: '我的', isShowNav: false, isShowBack: false }
    }
  ]
})

router.beforeEach((to,from,next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = `${title} - 微商城`
  }
  next()
})

export default router