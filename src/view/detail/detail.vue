<template>
  <div id="detail">
    <detail-nav-bar class="detail_nav" @titleClick="titleClick" ref="navbar"></detail-nav-bar>
    <Scroll class="content" ref="scroll" :probe-type="3" @Scroll="handlepositon">
      <!-- 轮播图 -->
      <swiper class="swiper_item">
        <swiper-item v-for="(item,index) in imgtop" :key="index">
          <!-- <a :href="item.link"> -->
          <img :src="item" />
          <!-- </a> -->
        </swiper-item>
      </swiper>
      <!-- 
      商品介绍
      -->
      <!-- <div>{{$store.state.cartList.length}}</div> -->
      <introduce :goodsitem="goodsitem"></introduce>
      <ShopInfo :shopinfo="shopinfo"></ShopInfo>
      <detailInfo :detailInfo="detailInfo"></detailInfo>
      <item-params :itemParams="itemParams" ref="params"></item-params>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <good-list :goods="recommends" ref="recommend" />
    </Scroll>
    <detail-bottom-bar @addCars="addCar"></detail-bottom-bar>
    <BackTop @click.native="backClick" v-show="ishow"></BackTop>
    <Toast :message="message" :show="show"></Toast>
    
  </div>
</template>
<script>
import { getdetail, GoodsInfo, Shopinfo, getRecommend } from "network/detail";
import DetailNavBar from "./detailChild/DetailNavBar";
import { Swiper, SwiperItem } from "components/common/swiper";
import introduce from "./detailChild/introduce";
import ShopInfo from "./detailChild/detailshopinfo";
import detailInfo from "./detailChild/detailInfo";
import itemParams from "./detailChild/itemParams";
import Scroll from "components/common/betterScroll/BetterScroll";
import DetailCommentInfo from "./detailChild/DetailCommentInfo";
import GoodList from "components/content/goods/GoodList";
import DetailBottomBar from "./detailChild/DetailBottomBar";
import { debounce } from "@/common/utils";
import BackTop from "components/content/backTop/BackTop";
import Toast from "components/common/toast/toast"
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      imgtop: [],
      itemImgListener: null,
      ishow: false,
      // ishow:false,
      goodsitem: {},
      shopinfo: {},
      detailInfo: {
        desc: "",
        detailImage: []
      },
      itemParams: {
        tables: [],
        set: []
      },
      commentInfo: {
        avatar: "",
        uname: "",
        content: "",
        created: "",
        style: ""
      },
      recommends: [],
      themetopYs: [],
      message:'',
      show:false
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
    DetailCommentInfo,
    GoodList,
    DetailBottomBar,
    BackTop,
    Toast
  },
  activated() {},
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  created() {
    this.iid = this.$route.query.id;
    console.log(this.iid);
    this.imgtop = this.iid.imgtop;
    this.detailInfo = this.iid.detailInfo;
    this.itemParams = this.iid.itemParams;
    this.commentInfo = this.iid.commentInfo;
    this.shopinfo = this.iid.shopinfo;
    this.goodsitem = this.iid.goodsitem;

    

    // this.getdetail(this.iid);

    //2获取商品信息

    //3.请求推荐数据
    getRecommend().then(res => {
      console.log(res);
      this.recommends = res.data.list;
    });
  },
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImgListener = () => {
      //  console.log('image')
      newRefresh();
    };

    this.$bus.$on("itemImageLoad", this.itemImgListener);
  },
  updated() {
    this.themetopYs = [];
    this.themetopYs.push(0);
    this.themetopYs.push(this.$refs.params.$el.offsetTop);
    this.themetopYs.push(this.$refs.comment.$el.offsetTop);
    this.themetopYs.push(this.$refs.recommend.$el.offsetTop);
  },
  methods: {
    // contentScroll(position) {

    // },

    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
      // this.themetopYs.push(0);
     // this.$refs.navbar.currentindex = 0;
    },
    handlepositon(position) {
      let a = 0,
        b = 0,
        c = 0;
      a = this.themetopYs[1];
      b = this.themetopYs[2];
      c = this.themetopYs[3];
      // console.log(position)
      //1.判断BackTop是否显示
      // console.log(position)
      const positionY = -position.y;
      // console.log(this.themetopYs)
      //for (let i in this.themetopYs) {
        // console.log(this.themetopYs[i])
        if (positionY > 0 && positionY < a) {
          this.$refs.navbar.currentindex = 0;
        }
        if (positionY > a && positionY < b) {
          this.$refs.navbar.currentindex = 1;
        }
        if (positionY > b && positionY < c) {
          this.$refs.navbar.currentindex = 2;
        }
        if (positionY > c) {
          this.$refs.navbar.currentindex = 3;
        }
     // }

      if (-position.y > 1000) {
        this.ishow = true;
      } else {
        this.ishow = false;
      }

      //2.决定tabControl是否吸顶(position:fixed)
      // this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themetopYs[index], 500);
    },
    addCar() {
     //获取购物车所需的商品信息
     const product={}
     product.image=this.imgtop[0];
     product.title=this.goodsitem.title;
     product.desc=this.detailInfo.desc;
     product.price=this.goodsitem.newPrice;
     product.iid=this.iid.iid
     //将商品添加到购物车中
     this.$store.dispatch('addCart',product)
     this.message="加入购物车成功"
     this.show=true
     setTimeout(()=>{
       this.show=false
     },1000)
    console.log(product)
    },
    getdetail(iid) {
      getdetail(iid).then(res => {
        const data = res.result;
        this.goodsitem = new GoodsInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.shopinfo = new Shopinfo(data.shopInfo);
        this.imgtop = data.itemInfo.topImages;
        this.detailInfo.detailImage = data.detailInfo.detailImage;
        this.detailInfo.desc = data.detailInfo.desc;
        this.itemParams = data.itemParams;
        this.itemParams.tables = data.itemParams.rule.tables;
        this.itemParams.set = data.itemParams.info.set;
        //取出评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
          this.commentInfo.avatar = data.rate.list[0].user.avatar;
          this.commentInfo.uname = data.rate.list[0].user.uname;
          this.commentInfo.content = data.rate.list[0].content;
          this.commentInfo.created = data.rate.list[0].created;
          this.commentInfo.style = data.rate.list[0].style;
        }
        console.log(res);
      });
    }
  }
};
</script>
<style scoped>
.swiper_item {
  height: 300px;
  overflow: hidden;
}
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.detail_nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>