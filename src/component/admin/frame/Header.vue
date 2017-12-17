<template>
  <div>
    <!-- 下拉菜单,通过command监听菜单点击事件,事件回调会受到被惦记的菜单标识符 -->
     <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link" >
        你好,{{ user.uname }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item command="logout">注销登录</el-dropdown-item>        
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        // 通过localstorage参数拿到用户名
        user: JSON.parse(localStorage.getItem('user'))||{}
      }
    },
    methods:{
//调用接口,注销登录,成功后清除localstroge
      logout(){
          this.$http.get(this.$api.logout)
          .then(res=>{
            localStorage.removeItem('user');
            this.$router.push('/login')
          })
      },

      //点击菜单式后的处理函数
      handleCommand(command){
        switch(command){
          case 'logout':
          this.logout();
          break;
        }
      }
    }
  }
</script>

<style scoped>

</style>