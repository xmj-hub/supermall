<template>
  <div class="cart">
    <NavBar class="nav_bar">
      <div slot="center">购物车({{Length}})</div>
      
    </NavBar>
    
    <CartList :cartList="cartList" @checkedall="checkedall"/>
     
   
     <CartBottomBar ref="bottombar"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";


import CartBottomBar from "./cartChild/CartBottomBar"
import CartList from "./cartChild/CartList"
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

</style>

