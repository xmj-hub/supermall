<template>
  <div id="app">
   <router-view></router-view>
   <tab-bar-main/>
   
  </div>
</template>

<script>

import TabBarMain from 'components/content/TabBarMain/TabBarMain'
export default {
  name: 'app',
  components: {
   TabBarMain,


  }
}
</script>

<style>
 @import "assets/css/base.css";
 
 body{
    margin:0;padding: 0;
    /* background-color:rgb(26,26,26); */
    max-width: 1920px;
    overflow-x: hidden;

}
/* body::-webkit-scrollbar {
    display: none;
} */
</style>
