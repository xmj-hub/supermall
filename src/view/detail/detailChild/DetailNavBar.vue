<template>
    <div>
         <NavBar>
          <div slot="left" class="image" @click="backhome">
              <img src="@/assets/img/detail/back.png" alt="">
          </div>
          <div slot="center">
              <div class="navbar">
              <div v-for="(item,index) in titles" 
                   :key="index" 
                   class="list_item" 
                   :class="{isactive:currentindex===index}"
                   @click="changeindex(index)">{{item}}</div>
              </div>
          </div>
      </NavBar>
    </div>
</template>
<script>
import NavBar from  '@/components/common/navbar/NavBar'
export default {
    name:'DetailNavBar',
    data() {
        return {
          titles:['商品','参数','评论','推荐'],
          currentindex:0,
        }
    },
    components:{
        NavBar
    },
    methods: {
        changeindex(i){
         this.currentindex=i
        },
        backhome() {
           this.$router.back()
        }
    },
}
</script>
<style scoped>
.navbar{
    
    display: flex;
    justify-content: center;
     
}  
.image img{
    height: 30px;
    vertical-align: middle
}
.list_item{
    
  flex: 1

}
.isactive{
    color: var(--color-high-text)
}
</style>