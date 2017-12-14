import util from '../../util/common'
import Vue from 'vue'
import Page1 from './page1.vue'

Vue.config.productionTip = false
Vue.prototype.$api = util.API
Vue.use(util.ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Page1/>',
  components: {
    Page1
  }
})
