<template>
    <div class="check_button" :class="{isactive: isCheck}">
        <img src="~assets/img/car/true.png" alt="">
    </div>
</template>
<script>
export default {
    name:'CheckButton',
    data() {
        return {
        
        }
    },
    props:{
        isCheck:{
              type:Boolean,
              default:false
              
          }
    }
}
</script>
<style scoped>
.check_button{

    margin-right: 10px;
    border-radius: 50%;
    border:1.5px solid #aaa;
    
    width: 18px;
    height: 18px;
}
.check_button img{
     width: 12px;
     height: 12px;
}
.isactive{
    border-color: red; 
   background-color: red;
}
</style>