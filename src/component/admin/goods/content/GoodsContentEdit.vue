<template>
  <div class="edit">
      <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>知识内容</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>编辑商品</el-breadcrumb-item>    
    </el-breadcrumb>

<!-- form表单 -->
<section class="edit_box">
  <!-- model关联表单数据,rules设置表单校验规则 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <!-- 字段要进行校验和重置,必须要添加prop属性 -->
          <el-form-item label="内容标题" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>
          <el-form-item label="副标题" prop="sub_title">
            <el-input v-model="ruleForm.sub_title"></el-input>
          </el-form-item>
          <el-form-item label="所属类别" prop="category_id">
            <el-select v-model="ruleForm.category_id" placeholder="请选择活动区域">
              <!-- 动态获取数据 v-for渲染 -->
              <!-- label属性设置option提示文本,value设置被选择的值 -->
              <el-option v-for="item in goodsCategory" :key="item.category_id" :label="item.title" :value="item.category_id">
                <span v-for="i in (item.class_layer-1)" :key="i">&nbsp;</span>
                <span v-if="item.class_layer!=1">></span>
                <span>{{ item.title }}</span>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否发布" prop="status">
            <el-switch v-model="ruleForm.status"></el-switch>
            </el-form-item>
          <el-form-item label="推荐类型" required>
            <el-switch v-model="ruleForm.is_slide" active-text="轮播图"></el-switch>
            <el-switch v-model="ruleForm.is_top" active-text="置顶"></el-switch>
            <el-switch v-model="ruleForm.is_hot" active-text="热门"></el-switch>
          </el-form-item>
    
          <el-form-item label="封面上传">
            <!-- action属性配置上传的接口 filList用来关联数据,用来展示  list-type设置展示的样式 -->
              <el-upload
                class="upload-demo" :action="uploadImgUrl" :file-list="ruleForm.imgList" list-type="picture" :on-success="uploadImgHandler">
                <el-button size="small" type="primary">图片上传</el-button>
                <!-- 数据提示,可要可不要 -->
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
          </el-form-item>

          <el-form-item label="附件上传">
                <el-upload
                  class="upload-demo" :action="uploadFileUrl" multiple :limit="3" :file-list="ruleForm.fileList" :on-success="uploadFileHandler">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
          </el-form-item>

          <el-form-item label="商品货号" prop="goods_no">
            <el-input v-model="ruleForm.goods_no"></el-input>
          </el-form-item>

          <el-form-item label="库存数量"  prop="stock_quantity">
            <el-input v-model="ruleForm.stock_quantity"></el-input>
          </el-form-item>

          <el-form-item label="市场价格" prop="market_price">
            <el-input v-model="ruleForm.market_price"></el-input>
          </el-form-item>

          <el-form-item label="销售价格" prop="sell_price">
            <el-input v-model="ruleForm.sell_price"></el-input>
          </el-form-item>

          <el-form-item label="内容摘要" prop="zhaiyao">
            <el-input v-model="ruleForm.zhaiyao"></el-input>
          </el-form-item>

          <el-form-item label="详细信息" prop="content">
            <el-input v-model="ruleForm.content"></el-input>
          </el-form-item>
          <el-form-item>

            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
    </el-form>
</section>  

  </div>
</template>

<script>
 export default {
    data() {
      return {
        //图片,文件上传的数据
        uploadImgUrl: this.$apiDomain + this.$api.atImg,
        uploadFileUrl:this.$apiDomain +this.$api.atFile,
        id: this.$route.params.id,
        //表单数据
        ruleForm: {
           "title":"Hazzys哈吉斯2017新款男士长袖衬衫纯棉修身英伦衬衫显瘦商务衬衣",
            "sub_title":"英伦轻奢 专柜同款 为不凡而生",
            "goods_no":"NZ0000000002",
            "category_id":"151",
            "stock_quantity":200,
            "market_price":1000,
            "sell_price":800,
            "status":true,
            "is_slide":true,
            "is_top":false,
            "is_hot":true,
            "zhaiyao":"为不凡而生",
            "content":"<p><strong>产品参数：</strong></p>",
            "imgList":[
                  {
                  "name":"wTgAWDLpQReTQ-ZOMdlAk4vF.jpg",
                  "url":"http://127.0.0.1:8899/imgs/wTgAWDLpQReTQ-ZOMdlAk4vF.jpg",
                  "shorturl":"/imgs/wTgAWDLpQReTQ-ZOMdlAk4vF.jpg"        
                  }
              ],
            "fileList":[
                {
                "name":"HN5d4_wrbsUk5KQNjzYSGGwm.jpg",
                "url":"http://127.0.0.1:8899/imgs/HN5d4_wrbsUk5KQNjzYSGGwm.jpg",
                "shorturl":"/imgs/HN5d4_wrbsUk5KQNjzYSGGwm.jpg"
                }
            ]
        },
        //校验规则
        rules: {
          title: [
            { required: true, message: '请输入内容标题', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
          sub_title: [
            { required: true, message: '请输入副标题', trigger: 'blur' }
          ],
          goods_no: [
            { required: true, message: '请输入商品编号', trigger: 'blur' }
          ],
          stock_quantity: [
            { required: true, message: '请输入库存', trigger: 'blur' }
          ],
          market_price: [
            { required: true, message: '请输入市场价格', trigger: 'blur' }
          ],
          sell_price: [
            { required: true, message: '请输入销售价格', trigger: 'blur' }
          ]
        },
        //商品分类
        goodsCategory:[]
      };
    },
    methods: {
      //封面上传成功之后的操作,要把服务器端返回的url的结果,保存到form表单中,将来提交到客户端
      //封面只有一张
      uploadImgHandler(data){
        console.log(arguments);
        this.ruleForm.imgList=[data];//赋值一个新数组
        
      },
      //附件上传成功
      uploadFileHandler(data){
        this.ruleForm.fileList.push(data);
      },

      //获取商品分类信息
      getGoodsCategory(){
        this.$http.get(this.$api.ctList+'goods')
        .then(res=>{
        
          this.goodsCategory=res.data.message;
        })
      },

      
      //获取商品信息----加上id参数
      getGoods(){
        this.$http.get(this.$api.gsDetail+this.id)  
        .then(res=>{   
          // console.log(res.data.message.category_id);
          //为了让res能够自动选取默认的值,把category_id转换为num类型的数据
          res.data.message.category_id= +res.data.message.category_id;
          // console.log(res.data.message.category_id);    
          this.ruleForm=res.data.message;
          // console.log(this.ruleForm);
        })
      },
    //修改商品信息---也要加上id信息
    modifyGoods(){
      this.$http.post(this.$api.gsEdit+this.id,this.ruleForm)
      .then(res=>this.$alert(res.data.message));
    },

      //表单提交qian的校验
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.modifyGoods();
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
     created() {
        this.getGoodsCategory();
        this.getGoods();
     }
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