<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab_control"
      v-show="isTabFixed"
    ></tab-control>
    <better-scroll
      class="content1"
      ref="scroll"
      :probe-type="3"
      @Scroll="handlepositon"
      :pull-up-load="true"
      @pullingUp="handlepull"
    >
      <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" @load.once="imageLoad" />
          </a>
        </swiper-item>
      </swiper>
      <div class="recommend">
        <div v-for="(item,index) in recommend" :key="index" class="recommend_item">
          <a :href="item.link">
            <img :src="item.image" alt />
            <p>{{item.title}}</p>
          </a>
        </div>
      </div>

      <div class="featureview">
        <a href="https://act.mogujie.com/zzlx67">
          <img src="~assets/img/home/recommend_bg.jpg" alt />
        </a>
      </div>

      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></tab-control>
      <good-list :goods="showGoods" />
    </better-scroll>
    <!--  .nation 修饰什么时候使用? 
      在我们需要监听一个组件的原生事件时，必须给对应的事件加上.nation修饰符，
      才能进行事件点击监听
     
     
    -->
    <BackTop @click.native="backClick" v-show="ishow"></BackTop>
  </div>
</template>

<script>
import { getHomeMultidata } from "network/home";
import {
  getHomeGoodspop,
  getHomeGoodsnew,
  getHomeGoodssell
} from "network/home";
import { Swiper, SwiperItem } from "components/common/swiper";
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodList";
import BetterScroll from "components/common/betterScroll/BetterScroll";
import BackTop from "components/content/backTop/BackTop";
import { log } from "util";
export default {
  name: "Home",
  data() {
    return {
      banners: null,
      recommend: null,
      ishow: false,
      goods: {
        'pop':{list: [] },
        'new':{list: [] },
        'sell':{list: [] }
        
      },
      currentType: "pop",
      tabOffsetTop: 545,
      saveY: 0,
      itemImgListener: null,
      isTabFixed: false
    };
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    TabControl,
    GoodList,
    BetterScroll,
    BackTop
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  activated() {
    // console.log('home enter')
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getCurrentY();
    // console.log('home leava')
    // console.log(this.saveY)
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },

  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    // this.getHomeGoods("pop", "new", "sell");
    this.getHomeGoodspop("pop");
    // this.getHomeGoodsnew();
    // this.getHomeGoodssell();
    // this.getHomeGoods('new')
    // this.getHomeGoods('sell')
    // this.getHomeGoods('pop')
    // this.getHomeGoods('new')
    // this.getHomeGoods('sell')
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 500);
    //3.监听item中图片加载完成
    this.itemImgListener = () => {
      //  console.log('image')
      refresh();
    };

    this.$bus.$on("itemImageLoad", this.itemImgListener);

    //2.获取tabControl的offsetTop
    //所有的组件都有一个数组#el:用于获取组件中的元素
    // this.tabOffsetTop=
  },
  methods: {
    imageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      if (this.tabOffsetTop === 544) {
      }
    },
    debounce(func, delay) {
      let timer = null;

      return function(...args) {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    //事件监听相关事件
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          this.getHomeGoodspop(this.currentType);
          break;
        case 1:
          this.currentType = "new";
          this.getHomeGoodsnew(this.currentType);
          break;
        case 2:
          this.currentType = "sell";
          this.getHomeGoodssell(this.currentType);
          break;
      }
      this.$refs.tabControl1.currentindex = index;
      this.$refs.tabControl2.currentindex = index;
      //  console.log(this.currentType)
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    handlepositon(position) {
      // console.log(position)
      //1.判断BackTop是否显示
      if (-position.y > 1000) {
        this.ishow = true;
      } else {
        this.ishow = false;
      }

      //2.决定tabControl是否吸顶(position:fixed)
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    handlepull() {
      // this.getHomeGoods(this.currentType);

      //  console.log("上拉加载更多")
    },
    //网络请求相关事件
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.lists;
        // this.recommend = res.data.recommend.list;
      });
    },
    // getHomeGoods(type) {
    //    const page=this.goods[type].page+1
    //   getHomeGoods(type,this.goods[type].page).then(res=>{

    //     this.goods[type].list.push(...res.data.list)

    //     this.goods[type].page+=1

    //     this.$refs.scroll.finishPullUp()
    // })
    // },
    // getHomeGoodspop
    getHomeGoodspop(type) {
      getHomeGoodspop().then(res => {
        console.log(res)
        this.goods[type].list.splice(0,30,...res.data.list)
        // this.goods.list.push(...res.data.list);
        // console.log(res);
      });
    },
    // getHomeGoodsnew
    getHomeGoodsnew(type) {
      getHomeGoodsnew().then(res => {
        this.goods[type].list.splice(0,30,...res.data.list)

        // this.goods.list=[];
        // this.goods.list.push(...res.data.list);
        // console.log(res);
      });
    },
    // getHomeGoodssell
    getHomeGoodssell(type) {
      getHomeGoodssell().then(res => {
        this.goods[type].list.splice(0,30,...res.data.list)

        // this.goods.list=[];
        // this.goods.list.push(...res.data.list);
        // console.log(res);
      });
    }
    // getHomeGoods(type1,type2,type3) {
    //   getHomeGoods(type1,type2,type3).then(res=>{
    //     this.goods[type1].list.push(...res.data.list)
    //     // console.log(...res.data.list)
    //     this.goods[type2].list.push(...res.data.lists)
    //     this.goods[type3].list.push(...res.data.list1)

    //     console.log(res)
    //   })

    //  const page=this.goods[type].page+1
    // getHomeGoods(type,this.goods[type].page).then(res=>{

    //   this.goods[type].list.push(...res.data.list)

    //   this.goods[type].page+=1

    //   this.$refs.scroll.finishPullUp()

    // },
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.recommend {
  display: flex;
  height: 110;
  border-bottom: 5px solid #eeefff;
}
.recommend .recommend_item {
  flex: 1;
  text-align: center;
}
.recommend .recommend_item a img {
  margin-top: 10px;
  width: 60px;
  height: 60px;
}
.recommend .recommend_item a p {
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 30px;
}
.featureview img {
  width: 100%;
}
/* .tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;
} */
.tab_control {
  position: relative;
  z-index: 9;
}
.content1 {
  height: calc(100% - 93px);
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
}
/* .fixed{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
} */
</style>
