import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import index from "../module/index"
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: index.about
    }, {
        path: '/business/:id',
        name: 'business',
        component: () => import('@/views/Business.vue')
    }, {
        path: '/order',
        name: 'order',
        component: () => import('../views/Order.vue')
    }, {
        path: '/myzone',
        name: 'myzone',
        component: () => import("../views/Myzone.vue")
    },
    {
        path: '/search/:keyword',
        name: 'search',
        component: () => import('../views/Seacrh.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
