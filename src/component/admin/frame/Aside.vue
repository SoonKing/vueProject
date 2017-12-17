
<template>
  <div class="aside">

      <div class="logo">
        <img src="../../../img/logo.png" alt="logo">
    </div>

  
       <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
  <!-- 导航列表  key属性用于for循环时候的渲染优化,index属性也要设置唯一的 -->
      <el-submenu v-for="item in menuList" :key="item.title" :index="item.title" >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.title}}</span>
        </template>

            <el-menu-item index="1-1" v-for="subItem in item.children" :key="subItem.title" :index="subItem.title">
              <router-link :to="subItem.path">
                <i class="el-icon-document"></i>
                <span>
                  {{subItem.title}}</span>
                </router-link>
            </el-menu-item>
            
      </el-submenu>

    </el-menu>
        
  </div>
</template>

<script>
  export default {
    data(){
      return {
        menuList:[
          {title:'学员问题',children:
          [
            {title:'内容管理',path:'/'},
            {title:'类别管理',path:'/'},
            {title:'评论管理',path:'/'},
          ]
          },
          {title:'前端技术',children:
          [
            {title:'内容管理',path:'/'},
            {title:'类别管理',path:'/'},
            {title:'评论管理',path:'/'},
          ]},
          {title:'重点专区',children:
          [
            {title:'内容管理',path:'/'},
            {title:'类别管理',path:'/'},
            {title:'评论管理',path:'/'},
          ]},
          {title:'资源下载',children:
          [
            {title:'内容管理',path:'/'},
            {title:'类别管理',path:'/'},
            {title:'评论管理',path:'/'},
          ]},
          {title:'商品管理',children:
          [
            {title:'内容管理',path:'/'},
            {title:'类别管理',path:'/'},
            {title:'评论管理',path:'/'},
          ]},
          {title:'订单管理',children:
          [
            {title:'订单详情',path:'/'},
          ]},
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .aside{
    height: 100%;
    .logo {
         text-align: center;
        }
    .el-menu{
      height: 100%;
      text-align: left;
    }
  }
 
</style>