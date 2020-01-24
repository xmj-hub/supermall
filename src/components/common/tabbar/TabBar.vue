<template>
  <div id="tab_bar">
   <slot></slot>
  </div>
</template>

<script>
  export default{
    name:'TabBar',

  }
</script>

<style scoped>

  #tab_bar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
   

    box-shadow: 0 -2px 1px rgba(100,100,100,0.1);
  }
  .tab_bar_item{
    flex: 1;
    text-align: center;
    height: 49px;

  }
  .tab_bar_item img{
    width: 24px;
    height: 24px;
  }
</style>
