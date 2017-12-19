import 'babel-polyfill'
import API from './api/index'
import ElementUI from 'element-ui'
import '../style/index.scss'
import '../../static/css/font-awesome.min.css'
import Vue from 'vue'
const initVue = function (Index) {
  Vue.config.productionTip = false
  Vue.prototype.$api = API
  Vue.prototype.baseUrl = API.root
  Vue.use(ElementUI)
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    template: '<Index/>',
    components: {
      Index
    }
  })
}
export default {
  API,
  ElementUI,
  initVue
}
