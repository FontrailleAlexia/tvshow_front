import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue';
import Popular from '../views/Popular.vue';
import Rated from '../views/Rated.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';


const routes = [
  {
     path: '/',
     name: 'Home',
     component: Home
   },
   { 
    name: 'profile',
    path: '/profile', 
    component: Profile, 
    props:true 
  },
   {
     path: '/popular',
     name: 'Popular',
     component: Popular
   },
   {
     path: '/rated',
     name: 'Rated',
     component: Rated
   },
   {
     path: '/login',
     name: 'Login',
     component: Login
   },
    /**{
     path: '/about',
     name: 'About',
     // route level code-splitting
     // this generates a separate chunk (about.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: () => import( '../views/About.vue')
   } */
 ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router