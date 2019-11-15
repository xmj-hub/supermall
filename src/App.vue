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
</style>
