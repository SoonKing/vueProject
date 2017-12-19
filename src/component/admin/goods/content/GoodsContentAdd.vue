<template>
  <div class="add">
      <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/goods/content/list' }">返回上一层</el-breadcrumb-item>
      <el-breadcrumb-item>知识内容</el-breadcrumb-item>
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>新增内容</el-breadcrumb-item>    
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="less">
.add{
  .el-breadcrumb {
      padding-bottom: 10px;
      border-bottom: 1px solid #a6a6a6;
  }
}


</style>