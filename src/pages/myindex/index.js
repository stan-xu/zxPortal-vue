import util from '../../util/common'
import Vue from 'vue'
import Index from './index.vue'

Vue.config.productionTip = false
Vue.prototype.$api = util.API
Vue.use(util.ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Index/>',
  components: {
    Index
  }
})
