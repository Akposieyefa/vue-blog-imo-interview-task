import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/pages/Posts.vue';
import Register from '../components/pages/Register.vue';

Vue.use(Router);

export default new Router({

    mode: 'history',

    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/register',
            component: Register
        }
    ]

});