import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
//1.安装插件
Vue.use(Vuex)


//2.创建Store对象
const store = new Vuex.Store({
    getters,
    state:{
       cartList:[
          

       ]
    },
    mutations:{
        AddCounter(context,payload){
         payload.count++
        },
        AddTocar(state,payload){
         payload.checked=true
         state.cartList.push(payload)
        }
    },
    actions:{
      addCart(context,payload) {
         // let oldProduct=null
         // for(let item of state.cartList){
         //    if(item.iid===payload.iid){
         //       oldProduct=item
         //    }
         // }
         // if(oldProduct){
         //    oldProduct.count+=1
         // }else{
         //    payload.count=1
         //    state.cartList.push(payload)
         // }
        let oldProduct=context.state.cartList.find(item => item.iid === payload.iid)
        if(oldProduct){
           //oldProduct.count+=1
           context.commit('AddCounter',oldProduct)
        }else{
           payload.count=1
           //context.state.cartList.push(payload)
           context.commit('AddTocar',payload)
        }
      }
    }

   


})
//3.挂载Vue实例上
export default store