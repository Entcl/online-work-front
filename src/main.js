import Vue from 'vue';
import App from './App.vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import router from './router';

import axios from 'axios';
Vue.prototype.axios = axios;

import store from './store';

// 规定进入路由需不需要权限(路由守卫)
router.beforeEach((to, from, next) => {
    var isLogin = sessionStorage.getItem("isLogin");

    // console.log(isLogin);

    if (to.path == "/logout") {
        sessionStorage.clear();
        next({ path: "/lgoin" });
    } else if (to.path == "/login") {
        if (isLogin != null) {
            next({ name: "BackHome" });
        }
    } else if (isLogin == null) {
        console.log("hahaha1");
        next({ path: "/login" });
    }

    next();

})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')