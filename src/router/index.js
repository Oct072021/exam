import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "@/views/home";
import item from "@/views/item";
import score from "@/views/score";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
    },
    {
        path: '/item',
        name: 'item',
        component: item,
    },
    {
        path: '/score',
        name: 'score',
        component: score,
    },
    /*  {
        path: '/item',
        name: 'item',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/!* webpackChunkName: "about" *!/ '../views/item')
      }*/
]

const router = new VueRouter({
    routes
})

export default router
