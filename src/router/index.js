//导入组件

import LoginComponent from '../component/login/Login.vue';
import AdminComponent from '../component/admin/Admin.vue';



//导入商品模块配置
import goodsRouterConfig from './goods.js';
let adminChildren = [...goodsRouterConfig];


//对外导出一个路由 配置对象

export default {
    routes: [

        //后台管理页面
        { name: "a", path: "/", component: AdminComponent, children: adminChildren },

        //账号管理
        { name: "l", path: "/login", component: LoginComponent },
    ]
};