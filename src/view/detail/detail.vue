<template>
  <div id="detail">
      
    <detail-nav-bar class="detail_nav"></detail-nav-bar>
    <Scroll class="content">
    <swiper class="swiper_item">
      <swiper-item  v-for="(item,index) in imgtop" :key="index">
        <!-- <a :href="item.link"> -->
          <img :src="item"  />
        <!-- </a> -->
      </swiper-item>
    </swiper>
    <introduce :goodsitem="goodsitem"></introduce>
    <ShopInfo  :shopinfo="shopinfo"></ShopInfo>
    <detailInfo :detailInfo="detailInfo"></detailInfo>
    <item-params :itemParams="itemParams"></item-params>
    <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
    </Scroll>
  </div>
</template>
<script>
import { getdetail,GoodsInfo,Shopinfo} from "network/detail";
import DetailNavBar from "./detailChild/DetailNavBar";
import {Swiper,SwiperItem} from 'components/common/swiper'
import introduce from "./detailChild/introduce"
import ShopInfo from "./detailChild/detailshopinfo"
import detailInfo from "./detailChild/detailInfo"
import itemParams from "./detailChild/itemParams"
import Scroll from "components/common/betterScroll/BetterScroll"
import DetailCommentInfo from "./detailChild/DetailCommentInfo"
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      imgtop: [],
      goodsitem:{},
      shopinfo:{},
      detailInfo:{
        desc:'',
        detailImage:[]

      },
      itemParams:
       {
       tables:[],
       set:[]
       },
       commentInfo:{}
    };
  },
  components: {
    DetailNavBar,
    Swiper,
    SwiperItem,
    introduce,
    ShopInfo,
    Scroll,
    detailInfo,
    itemParams,
    DetailCommentInfo
    
  },
  created() {
    this.iid = this.$route.query.id;
    this.getdetail(this.iid);

    //2获取商品信息
  
  },
  methods: {
    getdetail(iid) {
 
      getdetail(iid).then(res => {
        const data=res.result
        this.goodsitem=new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
        this.shopinfo=new Shopinfo(data.shopInfo)
        this.imgtop=data.itemInfo.topImages
        this.detailInfo.detailImage=data.detailInfo.detailImage
        this.detailInfo.desc=data.detailInfo.desc
        this.itemParams=data.itemParams
        this.itemParams.tables=data.itemParams.rule.tables
        this.itemParams.set=data.itemParams.info.set
        //取出评论信息
        if(data.rate.cRate!==0){
          this.commentInfo=data.rate.list[0]
        }
        console.log( res);
      });
    }
  }
};
</script>
<style scoped>
.swiper_item{
  height: 300px;
  overflow: hidden;
}
#detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;

}
.content{
    height: calc(100% - 44px);
}
.detail_nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
}

</style>