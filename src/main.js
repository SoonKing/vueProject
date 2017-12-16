//1.1导入第三方包
import Vue from 'vue';
//2.1导入跟组件
import AppComponent from './component/App.vue';
//渲染组件,启动应用程序
new Vue({
    el: "#app",
    render: c => c(AppComponent)
})