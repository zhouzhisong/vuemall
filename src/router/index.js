import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = ()=> import('../views/home/Home.vue')
const Category = ()=> import('../views/category/Category.vue')
const Cart = ()=> import('../views/cart/Cart.vue')
const Profile = ()=> import('../views/profile/Profile.vue')
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/catgory',
    name: 'Catgory',
    component: Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
