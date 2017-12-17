<template>
  <div class="list">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>内容管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>    
    </el-breadcrumb>

    <!-- 按钮组 -->
    <section class="list_util">
      <div class="list_util_btn">
          <el-button plain size="small" icon="el-icon-plus">新增</el-button>
          <el-button plain size="small" icon="el-icon-success">全选</el-button>
          <el-button plain size="small" icon="el-icon-delete">删除</el-button>
      </div>
      <!-- 搜索框 -->
      <div class="list_util_search">
        <el-input size="small"
          placeholder="请输入内容"
          prefix-icon="el-icon-search">
        </el-input>
      </div>
    </section>

    <!-- 表格:data属性表示 -->
     <el-table ref="multipleTable" :data="tableList" tooltip-effect="dark"
    style="width: 100%" height="400">
<!-- 多选框列 -->
    <el-table-column type="selection"  width="55">
    </el-table-column>
<!-- 普通列:label用于设置表头信息,prop用于该列展示的字段名称 -->
    <el-table-column label="日期" prop="date">
    </el-table-column>
        <!-- 普通咧,template设置任意html结构 -->
    <el-table-column prop="name" label="姓名">
       <template slot-scope="scope">
       <a href="">{{ scope.row.name }}</a> 
        </template>
    </el-table-column>

    <el-table-column prop="address" label="地址" show-overflow-tooltip>
    </el-table-column>
  </el-table>


  <!-- 分页 @size-change监听一页数据的变化(页码的大小),current-change页码的变化 -->
  <!--  current-page设置当前第几页 page-size每页的条目的可选项-->
  <!--layout 设置需要使用那些分页小组件 -->
  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next,jumper" :total="400">

    </el-pagination>

 
  </div>
</template>

<script>
  export default {
    data(){
      return {
        tableList:[
          {date:2017,name:'123',address:'吉山上街'},
          {date:2017,name:'123',address:'吉山上街'},
          {date:2017,name:'123',address:'吉山上街'},
          {date:2017,name:'123',address:'吉山上街'},
          {date:2017,name:'123',address:'吉山上街'},
          {date:2017,name:'123',address:'吉山上街'},
          {date:2017,name:'123',address:'吉山上街'},
          {date:2017,name:'123',address:'吉山上街'},
          {date:2017,name:'123',address:'吉山上街'},
          {date:2017,name:'123',address:'吉山上街'},
          {date:2017,name:'123',address:'吉山上街'},
          {date:2017,name:'123',address:'吉山上街'},
          {date:2017,name:'123',address:'吉山上街'},
          {date:2017,name:'123',address:'吉山上街'},
          {date:2017,name:'123',address:'吉山上街'},
          {date:2017,name:'123',address:'吉山上街'},
          {date:2017,name:'123',address:'吉山上街'},
          {date:2017,name:'456'},
          {date:2017,name:'789'},
        ]
      }
    },
    methods:{
      handleSizeChange(){},
      handleCurrentChange(){},
    }
  }
</script>

<style scoped lang="less">
.list{
  .el-breadcrumb {
      padding-bottom: 10px;
      border-bottom: 1px solid #a6a6a6;
  }
  //防止父盒子坍塌,加上overflow
  &_util{
    overflow: hidden;
    padding:10px 0;
      &_btn{
      float: left;
      }
      &_search{
      float: right;
      }
    }

    //分页
    .el-pagination {
      padding:8px;
      border:1px solid #ddd;
      background-color: #fff;
    }
  
}

</style>