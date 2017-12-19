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
          <el-button plain size="small" icon="el-icon-plus" @click="Add">新增</el-button>
          <el-button plain size="small" icon="el-icon-success">全选</el-button>
          <el-button plain size="small" icon="el-icon-delete">删除</el-button>
      </div>
      <!-- 搜索框 -->
      <div class="list_util_search">
        <!-- 当焦点离开时, 调用接口获取搜索后的数据列表 -->
         <el-input @blur="getTableList"  v-model="query.searchvalue" size="small" placeholder="请输入内容" prefix-icon="el-icon-search">   
         </el-input>

      </div>
    </section>

    <!-- 表格:data属性表示 -->
     <el-table ref="multipleTable" :data="tableList" tooltip-effect="dark"
    style="width: 100%" height="400">
<!-- 多选框列 -->
    <el-table-column type="selection"></el-table-column>
<!-- 普通列:label用于设置表头信息,prop用于该列展示的字段名称 -->
    <el-table-column label="商品名称" prop="title">
    </el-table-column>
    <el-table-column width="100" label="所属类别" prop="categoryname">
    </el-table-column>
    <el-table-column width="100" label="库存" prop="stock_quantity">
    </el-table-column>
    <el-table-column width="100" label="市场价" prop="market_price">
    </el-table-column>
    <el-table-column width="100" label="销售价" prop="sell_price">
    </el-table-column>

    
        <!-- 普通咧,template设置任意html结构 -->
      <el-table-column width="100" label="状态"> 
        <!-- 在temoplate里面, 需要通过scope.row拿到每一行数据 -->
        <template slot-scope="scope">

            <el-tooltip content="置顶" placement="bottom" effect="light">
              <i :class="['el-icon-upload2', scope.row.is_top? 'active': '']"></i>
              </el-tooltip>
              <el-tooltip content="热门" placement="bottom" effect="light">
              <i :class="['el-icon-phone-outline', scope.row.is_hot? 'active': '']"></i>
              </el-tooltip>
              <el-tooltip content="轮播" placement="bottom" effect="light">
              <i :class="['el-icon-picture', scope.row.is_slide? 'active': '']"></i>
              </el-tooltip>
        </template>
    </el-table-column>

    <el-table-column width="100" label="操作">
         <template slot-scope="scope">
            <a href="">修改</a>
        </template>
    </el-table-column>

  </el-table>


  <!-- 分页 @size-change监听一页数据的变化(页码的大小),current-change页码的变化 -->
  <!--  current-page设置当前第几页 page-size每页的条目的可选项-->
  <!--layout 设置需要使用那些分页小组件 -->
  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="query.pageIndex" :page-sizes="[10, 20, 30, 40]" :page-size="query.pageSize" layout="total, sizes, prev, pager, next,jumper" :total="totalcount">

    </el-pagination>

 
  </div>
</template>

<script>
  export default {
    data(){
      return {
        query:{
          pageIndex:1,
          pageSize:10,
          searchvalue:'',  
        },
        //数量总量
        totalcount:0,
        //列表数据
        tableList:[],
        id:0,
      }
    },
    methods:{
        //获取商品列表的方法
        getTableList(){
          //get方法的第二个参数用来查询制定字符串,header头信息等内
          this.$http.get(this.$api.gsList,{params:this.query})
          .then(res=>{
            // console.log(res);
            this.tableList=res.data.message;
            this.totalcount=res.data.totalcount;
            this.id=res.data.id
            // console.log(res.data.message);
            
          })
        },


      //每页的数量变化的时候触发
      handleSizeChange(pageSize){
        this.query.pageSize=pageSize;
        this.getTableList();
      },
      //页码变化的时候触发
      handleCurrentChange(pageIndex){
        this.query.pageIndex=pageIndex;
        this.getTableList();
      },

      //添加数据的方法
      Add(){
       this.$router.push({name:'gcta'})
      }

    },
    created(){
      //页面一上来就请求接口获取商品列表进行展示
      this.getTableList();
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