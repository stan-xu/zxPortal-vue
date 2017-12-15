import Vue from 'vue'
import Solve from './solve.vue'
import util from '../../util/common'

Vue.config.productionTip = false
Vue.prototype.$api = util.API
Vue.use(util.ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Solve/>',
  components: {
    Solve
  }
})
