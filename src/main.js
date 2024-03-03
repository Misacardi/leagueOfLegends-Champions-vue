import './assets/main.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createRouter, createWebHistory } from 'vue-router'

import { createApp } from 'vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import Favorites from './pages/Favorites.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/favorites', name: 'favorites', component: Favorites }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).use(autoAnimatePlugin).mount('#app')
