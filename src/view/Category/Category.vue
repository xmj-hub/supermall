<template>
  <div class="wrapper">
     <ul class="content">
       <button @click="btnclick">按钮</button>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
       <li>分类列表</li>
     </ul>

  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default{
    name:'Category',
    data() {
       return{
        scroll:null
       }
    },
    //组件创建完成后调用
    created() {
      // const bs=new BScroll('.wrapper',{})
      // console.log(bs)
      // console.log(document.querySelector('.wrapper'))
    },
    //组件已经挂载完毕
    mounted() {
      this.scroll=new BScroll('.wrapper',{
        probeType:3,
        pullUpLoad:true
      })
      this.scroll.on('scroll',(position)=>{
          console.log(position)
      })
      this.scroll.on('pullingUp',()=>{
         console.log('上拉加载更多')
      })
    },
    methods:{
       btnclick() {
         console.log('事件点击')
       }
    }
  }
 
</script>

<style scoped>
 .wrapper{
   width: 100%;
   height: 200px;
   background-color: red;
   overflow: hidden;
 }
</style>
