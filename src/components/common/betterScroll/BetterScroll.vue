<template>
    <div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>
      </div>
    </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
    name:'BetterScroll',
    data() {
       return {
           bscroll:null
       }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        }
    },
    mounted() {
       this.bscroll=new BScroll(this.$refs.wrapper,{
           probeType:this.probeType,
           click:true,

      
       })
       //监听滚动的位置
      this.bscroll.on('scroll',(position)=>{

      })
       
    },
    methods: {
        scrollTo(x,y,time=3000){
          this.bscroll.scrollTo(x,y,time)
        }
    },

}
</script>
<style scoped>
    
</style>
 