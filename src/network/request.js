import axios from 'axios'

export function request(config){
    const instance=axios.create({
     baseURL:"",
    
     timeout:5000
    })
    
    //axios的拦截器
    //请求拦截器的作用
    instance.interceptors.request.use(config=>{
        return config
    },err=>{

    })
    //2.2响应拦截
    instance.interceptors.response.use(res=>{
        return res.data
    }),err=>{
        console.log(err);
    }
     return instance(config)
}