import  Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const SearchComponent = () => import('../views/Home.vue');
const Compilation = () => import('../views/Compilation.vue');

export default new Router({


    mode: 'history',
    routes: [
        {
            path: '/search',
            name: 'search-main',
            component: SearchComponent,
        },
        {
            path: '/search/:param',
            name: 'searchParam',
            component: Compilation
        },
    ]
})
