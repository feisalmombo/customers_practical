import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Users from './components/Users'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import NotFound from './components/NotFound'

Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Users },
        { path: '/about', component: About },
        { path: '/contact', component: Contact },
        { path: '/user/:id', component: User },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound
        },
    ]
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')