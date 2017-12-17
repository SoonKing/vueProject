<template>
  <div class="login">
    <!-- 居中显示 -->
    <div class="login_content">
      <!-- logo -->
      <section class="login_content_logo">
        <img src="../../img/logo.png" alt="logo">
      </section>
      <!-- element插件form表单:如果需要表单验证和重置功能,需要设置model属性为整个表单数据 -->
      <section class="login_content_form">
          <el-form :model="user" :rules="ruleLoginForm"
                status-icon ref="ruleLoginForm" label-width="70px" label-position="left" class="demo-ruleForm" >

                <!-- 用户名: 表单效验与重置, 需要设置prop属性为表单字段 -->
                <el-form-item label="用户名" prop="uname">
                    <!-- 用户名输入框: 这里的v-model记得关联表单字段 -->
                    <el-input type="text" v-model="user.uname" auto-complete="off"></el-input>
                </el-form-item>

                <!-- 密码: 表单效验与重置, 需要设置prop属性为表单字段 -->
                <el-form-item label="密码" prop="upwd">
                    <!-- 密码输入框: 这里的v-model记得关联表单字段 -->
                    <el-input type="password" v-model="user.upwd" auto-complete="off"></el-input>
                </el-form-item>

                <!-- 按钮 -->
                <el-form-item>
                    <el-button @click="loginForm('ruleLoginForm')">提交</el-button>
                    <el-button @click="resetForm('ruleLoginForm')">重置</el-button>
                </el-form-item>
            </el-form>
      </section>
      
     </div>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        //用户将来提交给后台的用户字段
          user:{
            "uname":"",
            "upwd":""
          },
          ruleLoginForm:{
            uname:[
              { required: true, message: "请输入用户名", trigger: "blur" },
              { pattern: /\w{5,18}/, message: '长度在 5 到 18 个字符, 且只能为&_字母或数字', trigger: 'blur' }
            ],
            upwd:[
              { required: true, message: '请输入密码', trigger: 'blur' },
              { pattern: /.{6,18}/, message: '长度在 6 到 18 个字符', trigger: 'blur' }
            ]

          }
      };
    },
  methods:{
      //登录
      login(){
        //登陆成功之后,
        //1.判断status是否为0,部位0给出提示
        //2.如果为1,书名登录成功,本地localstorage存储返回的用户信息
        //3.跳转到后台管理
        this.$http.post(this.$api.login,this.user)
              .then(res => {
                let {status,message}=res.data;
                if(status==0){
                localStorage.setItem('user',JSON.stringify(message));//转换为字符串
                this.$router.push('/')
                }else{
                 alert('瞎搞')
                }
              });
      },

    //登录 ---提交调用接口  
    loginForm(formName){
      //满足校验规则才会发送登录请求
      this.$refs[formName].validate(result=>{
        if(result){
         this.login();
        }else{
          return false;
        }
      })
    },
    //重置表单
    resetForm(formName){
      this.$refs[formName].resetFields();
      }
  
    }
  }
</script>

<style scoped lang="less">
  .login{
    height: 100%;
    background-color: rgb(38, 124, 183);
    &_content{
      width: 400px;
      position: absolute;
      left:50%;
      top:50%;
      margin-left: -200px;
      margin-top:-160px;
      padding: 10px;
      border: 1px solid hsla(0,0%,100%,.2);
      border-radius: 6px;
      &_logo{
        text-align: center;
      }
      //form表单使用elementui
      &_form{
         padding: 2px 10px;
      }
    }
  }
</style>