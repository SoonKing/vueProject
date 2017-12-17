//导入组件

import LoginComponent from '../component/login/Login.vue';
import AdminComponent from '../component/admin/Admin.vue';

//导入商品相关的组件
import GoodsContentListComponent from '../component/admin/goods/content/GoodsContentList.vue';
import GoodsContentAddComponent from '../component/admin/goods/content/GoodsContentAdd.vue';
import GoodsContentEditComponent from '../component/admin/goods/content/GoodsContentEdit.vue';


//admin子路由
let adminChildren = [
    { name: 'gcl', path: 'goods/content/list', component: GoodsContentListComponent },
    { name: 'gca', path: 'goods/content/add', component: GoodsContentAddComponent },
    { name: 'gce', path: 'goods/content/edit', component: GoodsContentEditComponent },
]

//对外导出一个路由 配置对象

export default {
    routes: [

        //后台管理页面
        { name: "a", path: "/", component: AdminComponent, children: adminChildren },

        //账号管理
        { name: "l", path: "/login", component: LoginComponent },
    ]
};