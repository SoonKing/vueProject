<template>
  <div>
  测试---testing
    <!-- 使用 -->
   <router-view></router-view>
   <el-date-picker
            v-model="value"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
        </el-date-picker>
  </div>
</template>

<script>
  export default {
    //组件初始化完毕会自动调用的生命周期函数
    created(){
      //测试api和axios是否成功注入到vue原型中
      this.$http.get(this.$api.islogin)
      .then(res=>alert(res.data.code));
    },
    data(){
      return {
        value:"",
        pickerOptions:{
          //大于今天的日期不能选
          disableDate(time){
            return time.getTime()>Date.now();
          }
        }
      };
    }
  }
</script>

<style scoped>

</style>