import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import FormNickname from './views/FormNickname.vue'
import ChooseCharacter from './views/ChooseCharacter.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            FormNickname
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/choose-character',
            name: 'choose-character',
            component: ChooseCharacter,
        },
        // 404
        { path: '/404', component: NotFound },
        { path: '*', redirect: '/404' },
    ]
})