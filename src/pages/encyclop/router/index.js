import Vue from 'vue'
import Router from 'vue-router'
import Index from '../encyclop-content'
import Rule from '../encyclop-rulecontent'
import Save from '../encyclop-savecontent'
import WaterFall from '../encyclop-waterfall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/rule',
      component: Rule
    },
    {
      path: '/save',
      component: Save
    },
    {
      path: '/waterfall/:id',
      component: WaterFall
    }
  ]
})
