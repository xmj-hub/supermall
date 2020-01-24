<template>
<div id="home">
   <nav-bar class="home-nav">
     <div slot="center">购物街</div>
   </nav-bar>
   <swiper>
   <swiper-item v-for="(item,index) in banners" :key="index">
     <a :href="item.link">
       <img :src="item.image" alt="">
     </a>
   </swiper-item>
   </swiper>
   <div class="recommend" >
     <div v-for="(item,index) in recommend" :key="index" class="recommend_item">
            <a :href="item.link">
       <img :src="item.image" alt="">
       <p>{{item.title}}</p>
     </a>
     </div>
   </div>

     <div class="featureview">
       <a href="https://act.mogujie.com/zzlx67">
         <img src="~assets/img/home/recommend_bg.jpg" alt="">
       </a>
     </div>

     <tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>
     <div class="content_item">
     <div v-for="(item,index) in list" :key="index" class="item">
        <a href="javascript:;">
         <img :src="item.img" alt="">
         <p>{{item.title}}</p>
         <p>{{item.price}}</p>
         <p>{{item.cfav}}</p>
         </a>
     </div>
     </div>
     
</div>

</template>

<script>

import {getHomeMultidata} from "network/home";
import {getHomeGoods} from "network/home";
import {Swiper,SwiperItem} from 'components/common/swiper'
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
  export default{
    name:'Home',
    data(){
       return{
        banners:null,
        recommend:null,
        list:null,
        goods:{
          'pop':{page:0,list:[]},
          'news':{page:0,list:[]},
          'sell':{page:0,list:[]}
        }
       }
    },
    components:{
      NavBar,
      Swiper,
      SwiperItem,
      TabControl
    },
    created(){
      //1.请求多个数据
      getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list;
        this.recommend=res.data.recommend.list;
        console.log(res)
        
      })
      getHomeGoods().then(res=>{
        console.log(res)
         this.list=res.data.lists;
         console.log(this.list)
      })
    }
  }
</script>

<style>
#home{
  padding-top: 44px;
}
.home-nav{
  
  background-color: var(--color-tint);
  color:white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.recommend{
  display: flex;
  height: 110;
  border-bottom: 5px solid #eeefff;
}
.recommend .recommend_item{
  flex: 1;
  text-align: center;

}
.recommend .recommend_item a img{
    margin-top: 10px;
  width: 60px;
  height: 60px;
}
.recommend .recommend_item a p{
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 30px;
}
.featureview img{
  width: 100%;
}
.tab-control{
  position: sticky;
  top: 44px
}
.content_item{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
}
.item{
 
  width: 48%;
  
}
.item img{
  width: 100%;
  
}
</style>
