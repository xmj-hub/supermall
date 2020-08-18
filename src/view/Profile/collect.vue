<template>
  <div class="cart">
    <NavBar class="nav_bar">
      <div slot="left" class="image" @click="backhome">
         <img src="@/assets/img/detail/back.png" alt="">
      </div>
      <div slot="center">收藏店铺({{Length}})</div>
      
    </NavBar>
    
    <CartList :cartList="cartList" @checkedall="checkedall"/>
     
   
     <!-- <CartBottomBar ref="bottombar"/> -->
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";


import CartBottomBar from "../Cart/cartChild/CartBottomBar"
import CartList from "../Cart/cartChild/CartList"
import { mapGetters } from 'vuex'
export default {
  name: "Cart",
  components: {
    NavBar,
    
    
    CartBottomBar,
    CartList
  },
  computed: {
  
     ...mapGetters({
       Length:'cartLength',
       cartList:'cartList'
     })
    
  },

  methods:{
  checkedall() {
    let result = this.cartList.filter(item => item.checked === true);
       this.$refs.bottombar.checkedAll = result.length > 0 && result.length === this.cartList.length;
   
  },
          backhome() {
           this.$router.back()
        }
  }
};
</script>

<style scoped>
.cart{
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.nav_bar {
  background-color: var(--color-tint);
  color: white;
}
.image img{
    height: 30px;
    vertical-align: middle
}
</style>

