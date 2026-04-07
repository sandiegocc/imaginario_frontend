import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // --- RUTAS PÚBLICAS (Sin Layout de App) ---
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: { guestOnly: true },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
      meta: { guestOnly: true },
    },

    // --- RUTAS PROTEGIDAS (Hijas de /) ---
    {
      path: '/',
      // Este componente debe tener un <router-view /> para renderizar a los hijos
      component: () => import('@/views/TemplateView.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          redirect: { name: 'events' },
        },
        {
          path: 'ranking', // Se convierte en /ranking
          name: 'ranking',
          component: () => import('@/views/RankingView.vue'),
        },
        {
          path: 'events', // Se convierte en /events
          name: 'events',
          component: () => import('@/views/EventsView.vue'),
        },
        {
          path: 'events/:id', // Se convierte en /events/:id
          name: 'eventDetail',
          component: () => import('@/views/EventDetailView.vue'),
        },
      ],
    },
  ],
})

// GUARDIA DE NAVEGACIÓN (Se mantiene igual, funciona perfecto con hijos)
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isAuth = authStore.isLoggedIn

  // matched.some verifica si la ruta o ALGUNA de sus padres requiere auth
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuth) {
    next({ name: 'login' })
  } else if (to.matched.some((record) => record.meta.guestOnly) && isAuth) {
    next({ name: 'events' })
  } else {
    next()
  }
})

export default router
