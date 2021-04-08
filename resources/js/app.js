/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');

 window.Vue = require('vue').default;

 import router from './service/Router';
 Vue.component('app', require('./components/pages/App.vue').default)
 
 const app = new Vue({
    router,
     el: '#app',
 });
 