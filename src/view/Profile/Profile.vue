<template>
 <div class="profile">
   <div>我的档案</div>
   <div class="bg"></div>  

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
.bg{
  border-radius: 20px;
  background-color: #fff;
  
  width: 100%;
  height: 200px;
}
</style>
