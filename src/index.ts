import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    components: { App },
    el: '#app',
    template: '<App/>',
});