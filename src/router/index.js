import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('../view/Home/Home')
const Category=()=>import('../view/Category/Category')
const Cart=()=>import('../view/Cart/Cart')
const Profile=()=>import('../view/Profile/Profile')

vue.use(VueRouter)
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
  }
]

const router=new VueRouter({
 routes,
 mode:'history'
})

export default router
