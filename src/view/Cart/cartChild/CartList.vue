<template>
      <div class="car">
      <Scroll class="content" ref="scroll">
      <div v-for="(item,index) in cartList" :key="index" class="car_item">
        <!-- {{item}} -->

        <div class="item_top">
          <!-- <input type="radio" /> -->
          <CheckButton :isCheck="item.checked" @click.native="checkclick(item)"/>
          <div>
            <img :src="item.image" alt style="width:50px;height:50px" />
          </div>
          <div class="item_title">
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
          </div>
        </div>
        <div class="item_price">
          <div class="price">￥{{item.price}}</div>
          <div class="count">x{{item.count}}</div>
        </div>
      </div>
       </Scroll>
    </div>
</template>
<script>
import CheckButton from "./CheckButton"
import Scroll from "components/common/betterScroll/BetterScroll"
export default {
    name:'CartList',
    data() {
        return {
            
        }
    },
    components:{
        CheckButton,
        Scroll
    },
    props:{
      cartList:{
          type:Array,
          default() {
              return []
          }
      }
    },
    activated() {
    this.$refs.scroll.refresh()
    },
    methods:{
      checkclick(checked) {
      checked.checked=!checked.checked
      this.$emit('checkedall')
    }
    }
}
</script>
<style scoped>
.car{
  height: 100%;
  padding-top: 10px;
  background-color: #f6f6f6;
  overflow: hidden;
  padding-bottom: 10px;
}
.content{
  height: calc(100% - 44px - 49px - 44px);
  overflow: hidden;
}

.car_item{
  margin-top: 10px;
  padding-top: 10px; 
  padding-left: 10px; 
  /*border: 1px solid var(--color-tint); */
  margin: 10px auto;
  border-radius: 10px;
  width: 90%;
  overflow: hidden;
  background-color: #fff;
}
.item_top {
  display: flex;
  align-items: center
}
.item_title {
  margin-left: 5px;
}
.title {
  margin-top: 5px;
  width: 500px;
  height: 25px;
  color: black;
  font-size: 14px;

    overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.desc {
  margin-top: 5px;
  width: 5000px;
  height: 25px;
  font-size: 12px;
  color: black;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
}
.item_price {
  display: flex;
  justify-content: space-between;
}
.price {
  color: black;
}
.count {
  color: black;
  margin-right: 5px;
}   
</style>