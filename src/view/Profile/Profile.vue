<template>
  <div class="profile">
    <NavBar class="nav_bar">
      <div slot="left">设置</div>
      <div slot="right">消息</div>
    </NavBar>
    <!--  -->
    
    <!--  -->
    <div class="content">
      <div class="person">
        <div class="img">
          <img src="~assets/img/profile/load.png" alt="">
        </div>
        <div class="desc">
           请先登录
        </div>
      </div>
      <div v-for="(item,index) in message" :key="index">
        <ChooseItem :messageitem="item" :keynumber="index"/>
      </div>
      <!-- <ChooseItem :messageitem="messageitem1" />
      <ChooseItem :messageitem="messageitem2" />
      <ChooseItem :messageitem="messageitem3" /> -->
      <!-- <div><img src="~assets/img/profile/collect.png" alt=""></div><div>我的收藏</div>
      <div><img src="~assets/img/profile/star.png" alt=""></div><div>邀请好友</div>-->
    </div>

    <!-- <div class="bg">查看订单           全部订单></div>  
   <div class="bg">
      <div>查看订单</div>
      <div>我的优惠卷</div>
      <div>我的收藏</div>
     
      
    </div>  
   <div class="bg">
     <div>我的等级</div>
     <div>我的M币</div>
     <div>我的优惠卷</div>
   
    </div>-->
  </div>
</template>

<script>
import Scroll from "components/common/betterScroll/BetterScroll";
import NavBar from "components/common/navbar/NavBar";
import ChooseItem from "./profileChild/ChooseItem";
export default {
  name: "Profile",
  components: {
    Scroll,
    NavBar,
    ChooseItem
  },

  data() {
    return {
      message: {
      1: [
        {
          src: require("@/assets/img/profile/message.png"),
          content: "消息中心"
        },
        {
          src: require("@/assets/img/profile/collect.png"),
          content: "我的收藏"
        },
        {
          src: require("@/assets/img/profile/star.png"),
          content: "邀请好友"
        }
      ],
      2: [
        {
          src: require("@/assets/img/profile/publish.png"),
          content: "我的发布"
        },
        {
          src: require("@/assets/img/profile/menu.png"),
          content: "我的订单"
        }
      ],
      3: [
        {
          src: require("@/assets/img/profile/set.png"),
          content: "设置    "
        }
      ]
      }
    };
  }
};
</script>

<style scoped>
/* .profile{
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
 */
.profile {
  height: 100vh;
}
.nav_bar {
  background-color: var(--color-tint);
  color: white;
}
.person{
  display: flex;
  height: calc(100% - 44px - 49px - 260px);
  /* background-color: red; */
}
.img{
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: center;
}
.desc{
  flex: 0.7;
  display: flex;
  align-items: center;
  cursor: pointer;
  /* justify-content: center; */
}
.content {
  background-color: #bfbfbf;
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}

  

</style>
