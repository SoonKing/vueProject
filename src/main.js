//1.1导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';

//1.2启动vue 插件(默认在浏览器中自动安装,但是组件化就需要使用use)
Vue.use(VueRouter);


//2.1导入跟组件
import AppComponent from './component/App.vue';

//2.2导入路由配置
import routerConfig from './router'; //写一个目录会自动找index.js


//3.导入配置后的axios和api注入到vue 原型中,这样组件就可已通过this调用
import axios from './js/axios_config.js';
import api from './js/api_config.js';
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

//渲染组件,启动应用程序
new Vue({
    el: "#app",
    render: c => c(AppComponent),
    router: new VueRouter(routerConfig)
})