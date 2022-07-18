import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Vue from "vue"

Vue.use(router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/forms',
    name: 'form', 
    component: () => import('../views/FormView.vue')
  },
  {
  path: '/templates',
  name: 'templates', 
  component: () => import('../views/TemplateView.vue')
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
