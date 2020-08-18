import {request} from './request'

export function getdetail(iid){
    return request({
        url:'/detail',
        params:{
        iid

        }
    })
}

export function getRecommend() {
    return request({
        url:'/api/recommend',
    })
}
export class GoodsInfo{
    constructor(itemInfo,columns,services){
       this.title=itemInfo.title
       this.desc=itemInfo.desc
       this.newPrice=itemInfo.price
       this.oldPrice=itemInfo.oldPrice
       this.discount=itemInfo.discountDesc 
       this.columns=columns
       this.services=services
       this.realPrice=itemInfo.lowNowPrice
    }
}

export class Shopinfo{
    constructor(shopInfo){
    this.name=shopInfo.name
    this.shopLogo=shopInfo.shopLogo
    this.score=shopInfo.score
    this.cGoods=shopInfo.cGoods
    this.cSells=shopInfo.cSells

    }
}