import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import layout from "@/layout/index.vue"
import home2View from "@/views/Home2View.vue";
import aboutUs from "@/views/about/AboutUs.vue";
import overView from "@/views/overview/WrapOverview.vue";
import loginRegister from "@/views/login/LoginRegister.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/thisWeek',
  },


  {
    path: '/thisWeek',
    component: layout,
    children: [
      {
        path: 'overview',
        component: overView,
        name: 'overview'
      },
      {
        path: 'cubing',
        component: home2View,
        name: 'cubing'
      }
    ]
  },


  {
    path: '/about',
    component: layout,
    children: [
      {
        path: 'index',
        component: aboutUs,
        name: 'about'
      }
    ]
  },

  {
    path: '/login',
    component: layout,
    children: [
      {
        path: 'index',
        component: loginRegister,
        name: 'login'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
