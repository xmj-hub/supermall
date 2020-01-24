<template>
 <div class="profile">
   <div class="name">我的档案</div>
   
   <div class="bg">查看订单           全部订单></div>  
   <div class="bg">
      <div>查看订单</div>
      <div>我的优惠卷</div>
      <div>我的收藏</div>
      <!-- <div></div> -->
      
    </div>  
   <div class="bg">
     <div>我的等级</div>
     <div>我的M币</div>
     <div>我的优惠卷</div>
   
   </div>  

 </div>
</template>

<script>
  import Scroll from 'components/common/betterScroll/BetterScroll'
  export default{
    name:'Profile',
    components:{
      Scroll
    }
  }
</script>

<style scoped>
.profile{
  background-color: gray;
  padding: 0 5%;
}
.content{
  height: 300px;
  background-color: red;
  overflow: hidden;
}
.name{
  font-size: 24px;
  color: white;
}
.bg{
  /* border-radius: 30px; */
  background-color: #fff;
  
  width: 100%;
  height: 189px;
  margin-bottom: 10px;
  /* text-align: center; */
}
</style>
