import login from '@/modules/login/index.vue'
import homeIndex from '@/modules/home/home.vue'
import home from '@/modules/home/components/index.vue'
import indexOrder from '@/modules/order/index.vue'
import formOrder from '@/modules/order/components/formOrder.vue'
// import recepcionDocumentos from '@/components/recepcionDocumentos.vue'

export default [
  {
    path: '',
    redirect: '/login',
    meta: { requiresAuth: false }
  },
  {
    path: '/login',
    component: login,
    name: 'login',
    showName: 'Login',
    meta: { requiresAuth: false }
  },
  {
    path: '/home',
    meta: { requiresAuth: true },
    component: homeIndex,
    redirect: '/home/inicio',
    children: [
      {
        path: 'inicio',
        component: home,
        name: 'home',
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/orders',
    component: indexOrder,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'nuevo',
        component: formOrder,
        name: 'new-order',
        meta: { requiresAuth: true }
      },
      {
        path: 'editar/:id',
        component: formOrder,
        name: 'edit-order',
        meta: { requiresAuth: true }
      }
    ]
  }
  // ...menuRoutes
]
