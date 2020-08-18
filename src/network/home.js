import {request} from './request'

export function getHomeMultidata(){
    return request({
        url:'/api/demo_lunbotu',
        
    })
}
export function getHomeGoodspop(){
    return request({
        url:'/api/demo_pop',
        
    })
}
export function getHomeGoodsnew(){
    return request({
        url:'/api/demo_new',
        
    })
}
export function getHomeGoodssell(){
    return request({
        url:'/api/demo_sell',
        
    })
}
// export function getHomeGoods(type1,type2,type3){
//     return request({
//         url:'/api/demo',

//     })
// }