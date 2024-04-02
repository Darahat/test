/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
// import { createRouter, createWebHistory } from 'vue-router'
// import { setupLayouts } from 'virtual:generated-layouts'
// import Home from '@/pages/home.vue'
// import About from '@/pages/about.vue'
// import Index from '@/pages/index.vue'
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  // routes: [{ path: '/home', component: Home }, { path: '/about', component: About }, { path: '/', component: Index }],
  history: createWebHistory(process.env.BASE_URL),
  extendRoutes: setupLayouts,
  // extendRoutes: setupLayouts,
})

export default router
