<template>
    <div class="tab-control">
       
        <div class="tab-control-item" v-for="(item,index) in titles"  :key="index" 
        :class="{active:index===currentindex}" @click="indexitem(index)">
           
              <span>{{item}}</span>  
        </div>
    </div>
</template>

<script>
export default {
    name:'TabControl',
    data(){
        return{
              currentindex:0
        }
     
    },
    methods:{
        indexitem(index){
            this.currentindex=index
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        },
       
    }
}
</script>

<style scoped>
    .tab-control{
        display: flex;
        background-color: #fff;
    }
    .tab-control-item{
        flex:1;
        text-align: center;
        line-height: 40px;
        font-size: 15px;
    }
    .active span{
        padding: 5px;
        color: var(--color-high-text);
        border-bottom: 3px solid var(--color-tint)

    }
</style>