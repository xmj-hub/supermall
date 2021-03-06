import Vue from 'vue'
import Router from 'vue-router'

const Home=()=>import('../view/Home/Home')
const Category=()=>import('../view/Category/Category')
const Cart=()=>import('../view/Cart/Cart')
const Profile=()=>import('../view/Profile/Profile')
const Detail=()=>import('../view/detail/detail')
const Collect=()=>import('../view/Profile/collect.vue')

Vue.use(Router)
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',

    component:Home,

  },
  {
    path:'/category',
    component:Category,
  },
  {
    path:'/cart',
    component:Cart,
  },
  {
    path:'/profile',
    component:Profile,
  },
  {
    path:'/detail',
    component:Detail,
  },
   {
    path:'/collect',
    component:Collect,
  }


]

const router=new Router({
 routes,
 mode:'history'
})

export default router
