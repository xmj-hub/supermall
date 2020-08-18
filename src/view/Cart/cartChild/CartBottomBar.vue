<template>
    <div class="bottom_bar">
       <CheckButton class="check" @click.native="checkedAllClick" :isCheck="checkedAll"> </CheckButton>全选
       <div class="calculate">
           合计¥ {{ Number(totalPrice).toFixed(2) }}
       </div>
       <div class="buy" >
           去付款
       </div>
    </div>
</template>

<script>
import CheckButton from "./CheckButton"
import { mapGetters, mapMutations } from "vuex";
export default {
    name:'CartButtonBar',
    data() {
        return {
           checkedAll: true  
        }
    },
      computed: {
    ...mapGetters(["cartList", "cartListLength"]),
    // 购物车总价
    totalPrice() {
      return this.cartList
        .filter(item => {
          return item.checked === true;
        })
        .reduce((prev, item) => {
          return prev + item.price * item.count;
        }, 0);
    },
    checkedLength() {
      return this.cartList.filter(item => item.checked === true).length;
    }
  },
    components:{
        CheckButton
    },
    methods:{
        checkedAllClick() {
        this.cartList.forEach(item => (item.checked = !this.checkedAll));
        this.checkedAll=!this.checkedAll
        },
        onSubmit() {
      if (this.checkedLength === 0) {
        this.$toast({
          type: "fail",
          message: `您还没有选中商品哦`,
          forbidClick: true,
          duration: 1500
        });
      } else {
        this.$dialog
          .confirm({
            title: "温馨提示",
            message: "您确定要提交订单吗?"
          })
          .then(() => {
            this.$toast({
              type: "success",
              message: `提交 ${this.checkedLength} 条数据成功`,
              forbidClick: true,
              duration: 1500
            });
            // 提交数据清空对应购物车数据
            setTimeout(() => {
              this.clearCartList();
              this.checkedAll = false;
            }, 1500);
          })
          .catch(() => {
            return false;
          });
      }
    }
    }
}
</script>

<style scoped>
  .bottom_bar{
      display: flex;
      align-items: center;
      background-color: #fff;
      position: absolute;
      bottom: 44px;
       width: 100%;
      height: 44px;
      color: #fff;
      /* top: 0; */
  } 
  .check{
      margin-left: 25px;
  }
  .calculate{
      flex: 2;
      padding-right: 20px;
      text-align: right;
      color: red;
  }
  .buy{
  background-color: red;
  height: 100%;
  width: 80px;
  color: #fff;
  text-align: center;
  line-height: 44px;
  } 
</style>