import Vue from 'vue';

//该模块向外导出一个路由守卫函数
export default function(to, from, next) {
    // console.log(to);
    //1.请求接口,判断用户是否登录
    Vue.prototype.$http.get(Vue.prototype.$api.islogin)
        .then(res => {
            // console.log(res);
            // console.log(to);
            if (to.name == "l") {
                if (res.data.code == "logined") {
                    next('/');
                } else if (res.data.code == "nologin") {
                    next();
                }
            } else if (to.name != 'l') {
                if (res.data.code == "logined") {
                    next();
                } else if (res.data.code == "nologin") {
                    next('/login');
                }
            }

        })
        // console.log(Vue.prototype.$http.get(Vue.prototype.$api.islogin));

    //2.通过to对象的别名--name判断是去往那个页面
    //2.1如果去往登录页面
    //2.1.1 登录->自动跳转到首页->next('/')
    //2.1.2 未登录->允许访问登录页->next()
    //2.2如果去往非登录页面
    //2.2.1 登录->允许访问登录页->next()
    //2.2.2 未登录->自动跳转到首页->next('/login')

}