import Vue from "vue";
import VueRouter from "vue-router";
import Main from '../views/Main.vue'
import User from '../views/User'
import Home from '../views/Home'
import Mall from '../views/Mall'
import PageOne from '../views/Other/PageOne.vue'
import PageTwo from '../views/Other/PageTwo.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component:Main,
        redirect:'/home',
        children: [
            //已经动态添加
            // {
            //     path: '/home',
            //     name: 'home',
            //     component: Home
            // },
            // {
            //     path: '/user',
            //     name: 'user',
            //     component:User,
            // },
            // {
            //     path: '/mall',
            //     name: 'mall',
            //     component:Mall,
            // },
            // {
            //     path: '/page1',
            //     name: 'page1',
            //     component:PageOne,
            // },
            // {
            //     path: '/page1',
            //     name: 'page2',
            //     component:PageTwo,
            // },
        ]
    } ,
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login/login.vue')
    }
]

const router  = new VueRouter({
    mode: 'history',
    routes
})

export default router