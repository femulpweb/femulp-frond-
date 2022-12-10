import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';
import NotFound from '@/views/NotFoundPage.vue';
//import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    redirect: 'login',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard administrativo',
        meta: {requiresAuth: true, rol:false},

        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
      {
        path: '/administrarEventos',
        name: 'Administrar Eventos',
        meta: {requiresAuth: true, rol:false},

        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/agregarEventos.vue')
      },
      {
        path: '/pag',
        name: 'página',
        meta: {requiresAuth: true, rol:false},
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/pagBlanco.vue')
      },
      {
        path: '/reporteGeneral',
        name: 'reporte General',
        meta: {requiresAuth: true, rol:false},
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/reporteGeneral.vue')
      },
     
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/registroEvento/:id',
        name: 'Registro de evento',
        meta: {requiresAuth: false, rol:false},
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/registroEvento.vue')
      },
      {
        path: '/viewEventos',
        name: 'Eventos Disponibles',
        meta: {requiresAuth: false, rol:false},
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/viewEventos.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];



export default routes;
