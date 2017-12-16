//导入组件
import HomeComponent from '../component/home/Home.vue';
import LoginComponent from '../component/login/Login.vue';




//对外导出一个路由 配置对象

export default {
    routes: [
        { name: "h", path: "/home", component: HomeComponent }, { name: "l", path: "/login", component: LoginComponent }
    ]
};