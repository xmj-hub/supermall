<template>
    <div class="itemParams">
        <div class="rule">
            <div v-for="(Mainitem,Mainindex) in itemParams.tables" :key="Mainindex">
            <div v-for="(items,indexs) in Mainitem" :key="indexs" class="param">
               <div v-for="(item,index) in items " :key="index" class="param_item">
                    {{item}}
               </div>
            </div>
            </div>
        </div>
        <div class="info">
            <div v-for="(item,index) in itemParams.set" :key="index" class="info_item">
                 <div class="key">{{item.key}} </div>
                 <div class="value">{{item.value}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'itemParams',
    props:{
        itemParams:{
            type:Object,
            default() {

            }
           
        }
    },

}
</script>
<style  scoped>
.rule{
    margin-top: 30px;
}
.param{
    display: flex;
    /* margin-bottom: 10px; */
    margin: 0px 15px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #d2d2d2
}
.param_item{
    flex: 1;
}

.info_item{
    display: flex;
    
    align-items: center;
    border-bottom: 1px solid #d2d2d2;
    margin: 0 15px;
    height: 60px;
}
.value{
   flex: 0.7;
   color:var(--color-high-text)
}
.key{
    flex: 0.3
}
</style>