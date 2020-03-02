import Vue from 'vue'
import 'mdui/dist/css/mdui.css'
import httpcode from '../layouts/httpcode.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    
  },
  render:h=>h(httpcode)
})
