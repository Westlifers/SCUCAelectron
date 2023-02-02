import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import layout from "@/layout/index.vue"
import home2View from "@/views/Home2View.vue";
import aboutUs from "@/views/about/AboutUs.vue";
import overView from "@/views/overview/OverView.vue";

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
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
