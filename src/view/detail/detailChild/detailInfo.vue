<template>
<div class="detailinfo">
    <div class="desc">
      {{detailInfo.desc}}
    </div>
    <div v-for="(Mainitem,Mainindex) in detailInfo.detailImage" :key="Mainindex" class="image">
        <div class="image_desc">{{Mainitem.key}}</div>
        <div v-for="(item,index) in Mainitem.list" :key="index" class="imagelist">
          <img :src="item" alt="" class="imglist" >
        </div>
    </div>

   
</div>
</template>
<script>
export default {
    name:'detailInfo',
    props:{
        detailInfo:{
            type:Object,
            default () {
                return {}
            }
        }
    }
}
</script>

<style scoped>
.detailinfo{
    padding: 0 5px;
    border-bottom: 10px solid #d2d2d2;
    
}
.desc{
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;
   
    font-size: 16px;
    
}

/* .desc::before{
  content: '——————';
  position: absolute;
  top: -15px;
  color: palevioletred;

}
.desc::after{
  content: '——————';
  position: absolute;
  right: 0;
  top: 25px;
  
   color: palevioletred;
} */
.image_desc{
    height: 44px;
    line-height: 44px;
    font-size: 16px;
}
 .imglist{
  width: 100%;
  height: 100%;
  overflow: hidden;
}   
</style>