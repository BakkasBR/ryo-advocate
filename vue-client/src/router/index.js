import Login from '@/views/auth/Login.vue'
import Dasdhboard from '@/views/Dashboard.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },

    {
      path: '/',
      name: 'Dasdhboard',
      component: Dasdhboard,
    },
  ]
})

export default router
