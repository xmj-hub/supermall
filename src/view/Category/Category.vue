<template>
  <div class="Category">
    <NavBar class="nav_bar">
      <div slot="left">
        <img  src="~assets/img/common/message.png" alt="" class="left_image">
      </div>
      <div slot="center">
        分类
      </div>
      <div slot="right">
        <img src="~assets/img/common/car.png" alt="" class="left_image">
      </div>
    </NavBar>
 
    <div class="bottom">
    <div class="left">
      
        <div v-for="(item,index) in listName " 
             :key="index" 
             class="list_item"
             @click="handlechange(index)"
             :class="{isActive:currentindex===index}"
             >
          {{item}}
        </div>
      
    </div>
  
    <div class="right">
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
      :pull-up-load="false"
      >
       <div class="img_top">
         <div v-for="(item,index) in Topimg" :key="index" class="imgtop_item">
           <img :src="item.img" alt="">
           <div class="name">{{item.name}}</div>
         </div>
       </div>
      <tab-control :titles="['流行','新款','精选']"  @tabClick="tabClick" ref="tabControl2"></tab-control>
      <good-list :goods="showGoods" />
      </better-scroll>
     </div>
      
    </div>
    
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import NavBar from 'components/common/navbar/NavBar'
// import {getcategory} from ''
import { getcategory} from "network/category";
import {
  getHomeGoodspop,
  getHomeGoodsnew,
  getHomeGoodssell
} from "network/home";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodList";
import BetterScroll from "components/common/betterScroll/BetterScroll";
  export default{
    name:'Category',
    data() {
       return{
        scroll:null,
        currentindex:0,
        Topimg:[],
        Listimg:[],
        imglist:{},
        currentType:'pop',
        tabOffsetTop: 420,
        isTabFixed: false,
        goods: {
        'pop':{list: [] },
        'new':{list: [] },
        'sell':{list: [] }
        
      },
        listName:[
          "正在流行",
          "上衣",
          "裤子",
          "裙子",
          // "内衣",
          "女鞋",
          "男友",
          "包包",
          "运动",
          "配饰",
          "美妆",
          "个护",
          "家居",
          "百货",
          //"母婴",
          //"食品",
         

        ]
       }
    },
    components:{
      NavBar,
      TabControl,
      GoodList,
      BetterScroll
      
      
    },
   computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
    //组件创建完成后调用
    created() {
      this.getCategory()

    },
    //组件已经挂载完毕
    mounted() {

    },
    methods:{
       btnclick() {
         console.log('事件点击')
       },
       handlechange(index) {
         this.currentindex=index
         switch (index) {
           case 0:this.Topimg=this.imglist[0]; break;
           case 1:this.Topimg=this.imglist[1]; break;
           case 2:this.Topimg=this.imglist[2]; break;
           case 3:this.Topimg=this.imglist[3]; break;
           case 4:this.Topimg=this.imglist[4]; break;
           case 5:this.Topimg=this.imglist[5]; break;
           case 6:this.Topimg=this.imglist[6]; break;
           case 7:this.Topimg=this.imglist[7]; break;
           case 8:this.Topimg=this.imglist[8]; break;
           case 9:this.Topimg=this.imglist[9]; break;
           case 10:this.Topimg=this.imglist[10]; break;
           case 11:this.Topimg=this.imglist[11]; break;
           case 12:this.Topimg=this.imglist[12]; break;
           case 13:this.Topimg=this.imglist[13]; break;
           case 14:this.Topimg=this.imglist[14]; break;
           case 15:this.Topimg=this.imglist[15]; break;

         }
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
    },
       //网络请求
       getCategory() {
         getcategory().then(res=>{
            this.imglist=res.data.data.list
          //  console.log(res)
           this.Topimg=this.imglist[0]
           this.goods[this.currentType].list.push(...res.data.data.list0)
         })
       }
    }
  }
 
</script>

<style scoped>

 .nav_bar{
   background-color: var(--color-tint);
   color: white;
}
 .wrapper{
   width: 100%;
   height: 200px;
   /* background-color: red; */
   overflow: hidden;
 }
 .bottom{
   display: flex
 }
 .left{
   position: flex;
 }
.left_image{
  width: 18px;
  /* height: 20px; */
}
.content1 {
  height: calc(100% - 93px);
  width: calc(100% - 85px);
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
}

.list_item{
  width: 85px;
  height: 38px;
  text-align: center;
  line-height: 38px;
  font-size: 0.28rem;
  color: #666666;
  background-color: #F6F6F6;
}
.isActive{
  color: #FF5777;
  background-color: #fff;
}
.bottom .right{
  /* margin: 0px 5px 0; */
  width: calc(100% - 85px);
}
.img_top{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top:20px; 
  background-color: #fff;
}
.tab_control {
  width: 100%;
  position: relative;
  z-index: 9;
}
.imgtop_item{
  margin-bottom: 10px;
  width: 82px;
  height: 88px;
  text-align: center;
}
.imgtop_item img{
   width: 60.66px;
   height: 60.66px;
}
</style>
