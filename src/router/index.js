import VueRouter from 'vue-router'
import routes from './routes'

const router = new VueRouter({
  routes: routes
})

router.beforeEach(async (to, from, next) => {
  const autenticado = localStorage.getItem('accessToken')

  if (!autenticado && to.meta.requiresAuth) {
    next({ path: '/login' })
  } else if (autenticado && !to.meta.requiresAuth) {
    next({ path: '/home' })
  } else {
    next()
  }
})

export default router
