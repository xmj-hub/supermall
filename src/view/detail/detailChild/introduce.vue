<template>
    <div  v-if="Object.keys(goodsitem).length!==0" class="introduce">
        <div class="title">{{goodsitem.title}}</div>
        <div class="price">
            <div class="newprice">{{goodsitem.newPrice}}</div>
            <div class="oldprice">{{goodsitem.oldPrice}}</div>
            <div class="iconprice">{{goodsitem.discount}}</div>
        </div>
        <div class="sales_volume">
        <div class="sales_volume_item1">{{goodsitem.columns[0]}}</div>
        <div class="sales_volume_item2">{{goodsitem.columns[1]}}</div>
        <div class="sales_volume_item3">{{goodsitem.services[goodsitem.services.length-1].name}}</div>
        </div>
        <div class="info_service"  >
             <div v-for="index in goodsitem.services.length-1" :key="index" class="info_service_item" >
                 <img :src="goodsitem.services[index-1].icon" alt="">{{goodsitem.services[index-1].name}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'introduce',
    props:{
        goodsitem:{
            type:Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
.introduce{
    border-bottom: 5px solid #d2d2d2
}
.title{
    margin-top: 10px;
    padding: 0 5px;
    font-size: 16px;
}
.price{
    display: flex;
    margin:15px 5px 0 ;
}
.newprice{
    color: var(--color-high-text);
    font-size: 24px;
    line-height: 23px;
}
.oldprice{
    margin:0 5px;
    position: relative;
    color: #d4d2d4;
    font-size: 20px;
    line-height: 25px;
    

}
.oldprice::after{
  content: '———';
  position: absolute;
  top: 0;
  left: 0;
}
.iconprice{
   
   border: 1px solid red;
   border-radius: 15px;
   color: white;
   font-size: 14px;
   /* width: 30px; */
   height: 20px;
   background-color: var(--color-high-text);
}
.sales_volume{
    margin: 0 5px;
    display: flex;
    border-bottom: 1px solid #d4d2d4;
    font-size: 14px;
    color: #d4d2d4;
    line-height: 40px;
}
.sales_volume_item1{
    flex: 1;
    text-align:left ;
}
.sales_volume_item2{
    flex: 1;
    text-align:center ;
}
.sales_volume_item3{
    flex: 1;
    text-align:right ;
}
 .info_service{

     display: flex;
    
     font-size: 14px;
     height: 60px;
     line-height: 60px;
 }  
 .info_service img{
     width: 12px;
     height: 12px;
 } 
 .info_service_item{
     flex: 1;
     text-align: center;
 }
</style>