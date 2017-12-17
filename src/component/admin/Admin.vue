<template>
<el-container>
    <!-- 左侧导航栏 -->
  <el-aside width="200px">
    <app-aside></app-aside>
  </el-aside>
  <!-- 右侧部分 -->
  <el-container>
    <!-- 右侧头部, 公共部分 -->
    <el-header>
      <app-header></app-header>
      </el-header>
    <!-- 右侧主体, 变化部分 -->
    <el-main>Main</el-main>
  </el-container>
</el-container>

 
</template>

<script>
    import AsideComponent from './frame/Aside.vue';
    import HeaderComponent from './frame/Header.vue';
    export default {
        components: {
            'appAside': AsideComponent,
            'appHeader':HeaderComponent
        }
    }
</script>

<style scoped lang="less">
.el-container{
  height: 100%;
   .el-aside {
    height: 100%;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
}
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
</style>
