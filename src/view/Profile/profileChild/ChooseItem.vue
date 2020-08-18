<template>
    <div class="choose">
         <div class="flex" v-for="(item,index) in messageitem" :key="index"> 
             <div class="icon"><img :src="item.src" alt=""></div>
             <div class="content">{{item.content}}</div>
             <div class="click" @click="gotocollect(index,keynumber)"><img src="~assets/img/profile/right.png" alt=""></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'ChooseItem',
    data() {
        return {

        }
    },
    props:{
       messageitem:{
           type:Array,
           default() {
               return {}
           }
       },
       keynumber:{
           type:String,
           default:"0"
           
       },
    },
    methods:{
        gotocollect(index,key) {
        if(index==1 && key=="1" ){
            // console.log(key)
           this.$router.push({path:'/collect'})}
        }
    }
}
</script>
<style scoped>
.choose{
    border-bottom: 10px solid #bfbfbf
}
  .flex{
      display: flex;
      align-items: center;
      border-bottom: 1px solid #8a8a8a;
      height: 40px;
      background-color: #fff;
      justify-content: space-between;
      padding-right: 10px;

  } 
.flex .icon{
    margin-left: 20px;
    margin-right: 10px;
}
 .flex .icon img{
     width: 20px
 }
 .content{
     font-size: 16px;
 } 
 .click{
     margin-left: 180px;
 }
</style>
