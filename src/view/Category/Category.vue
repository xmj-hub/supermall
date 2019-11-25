<template>
  <div class="wrapper">
     <ul class="content">
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
        probeType:3
      })
      this.scroll.on('scroll',(position)=>{
          console.log(position)
      })
    }
  }
 
</script>

<style>
 .wrapper{
   width: 100%;
   height: 200px;
   background-color: red;
   overflow: hidden;
 }
</style>
