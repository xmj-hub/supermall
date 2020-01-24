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
        },
        pullUpLoad:{
        type:Boolean,
        default:false
        }
    },
    mounted() {
        //创建BScroll对象
       this.bscroll=new BScroll(this.$refs.wrapper,{
           probeType:this.probeType,
           click:true,
           pullUpLoad:this.pullUpLoad  

      
       })
       //监听滚动的位置
      this.bscroll.on('scroll',(position)=>{
            this.$emit('Scroll',position)
      })
       
       //监听上拉事件
       this.bscroll.on('pullingUp',()=>{
           this.$emit('pullingUp')
       })

    //    this.bscroll.refresh()
    },
    methods: {
        scrollTo(x,y,time=3000){
        this.bscroll && this.bscroll.scrollTo && this.bscroll.scrollTo(x,y,time)
        },
        finishPullUp() {
        this.bscroll && this.bscroll.scrollTo && this.bscroll.finishPullUp()
        },
        refresh() {
            // console.log("----")
        this.bscroll && this.bscroll.scrollTo && this.bscroll.refresh()
        },
        getCurrentY() {
            return this.bscroll.y ? this.bscroll.y : 0
        }
    },

}
</script>
<style scoped>
    
</style>
 