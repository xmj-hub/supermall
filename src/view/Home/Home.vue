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
</div>

</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from "network/home";
// import Swiper from 'components/common/swiper/Swiper'
// import Swiper from 'components/common/swiper/SwiperItem'
import {Swiper,SwiperItem} from 'components/common/swiper'
  export default{
    name:'Home',
    data(){
       return{
        banners:null,
        recommend:null
       }
    },
    components:{
      NavBar,
      Swiper,
      SwiperItem
    },
    created(){
      //1.请求多个数据
      getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list;
        this.recommend=res.data.recommend.list

        
      })
    }
  }
</script>

<style>
.home-nav{
  background-color: var(--color-tint);
  color:white;
}
</style>
