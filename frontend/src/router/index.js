import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'homeRoot',
    component: HomeView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

