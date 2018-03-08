import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Left from '@/components/Left'
import Right from '@/components/Right'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        left:Left,
        right:Right
      }
      
    },
    {
      path: '/hi',
      name: 'hi',
      component: Hi,
      children: [{
        path: '/',
        component: Hi
      },
      {
        path: 'hi1',
        component: Hi1
      },
      {
        path:'hi2',
        name: 'hi2',
        component: Hi2
      }
      ],
      alias:'/aliasHi'
    },
    {
      path:'/params/:username/:number',
      name: 'params',
      component: Params
    },
    {
      path:'/goHome',
      redirect:'/'
    },
    {
      path:'/goParams/:username/:number',
      redirect:'/params/:username/:number'
    },
    {
      path:'*',
      component: Error
    }
  ]
})
