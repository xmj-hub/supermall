<template>
    <div class="bottom_bar">
        <div class="server">
            <img src="@/assets/img/detail/客服.png" alt="">
            <div>客服</div>
        </div>
        <div class="shop">
             <img src="@/assets/img/detail/店铺.png" alt="">
            <div>店铺</div>
        </div>
        <div class="collect">
             <img src="@/assets/img/detail/收藏.png" alt="">
            <div>收藏</div>
        </div>
        <div class="car">
         
            <div class="cars">加入购物车</div>
            <div class="buy">购买</div>
        </div>
        <!-- <div class="buy">
          
            
        </div> -->
    </div>
</template>
<script>
export default {
    name:'DetailBottomBar',
    
}
</script>
<style scoped>
.bottom_bar{
    
    display: flex;
    padding-left: 10px;
    position: relative;
    /* bottom: 49px; */
    z-index: 8;
    height: 49px;
    background-color: #fff;
    justify-content: space-between;

}   
.bottom_bar img {
    width: 25px;
    height: 25px;
    
}

.server{
    text-align: center;
}
.shop{
    text-align: center;
}
.collect{
    text-align: center;
}
.car{
  display: flex;
  line-height: 49px;
  background-color: yellow;
}
.buy{
   line-height: 49px;
   width: 100px;
   text-align: center;
   background-color: pink;
   color: white;
} 
</style>