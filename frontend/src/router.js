
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import BoundedContext465AManager from "./components/listers/BoundedContext465ACards"
import BoundedContext465ADetail from "./components/listers/BoundedContext465ADetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/boundedContext465s/as',
                name: 'BoundedContext465AManager',
                component: BoundedContext465AManager
            },
            {
                path: '/boundedContext465s/as/:id',
                name: 'BoundedContext465ADetail',
                component: BoundedContext465ADetail
            },



    ]
})
