import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import register from '@/components/register'
import login from '@/components/login'

Vue.use(Router)

var routes = [
        {
          path:'/',
          name:'index',
          component:index
        },
        { 
          path:'/register',
          name:'register',
          component:register
        },
        { 
          path:'/login',
          name:'login',
          component:login
        },
        
]

export default new Router({
  routes:routes,
  mode:'history'   /*hash*/
})
