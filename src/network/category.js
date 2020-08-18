import {request} from './request'

// export function getdetail(iid){
//     return request({
//         url:'/detail',
//         params:{
//         iid

//         }
//     })
// }

export function getcategory() {
    return request({
        url:'/api/category',
    })
}
