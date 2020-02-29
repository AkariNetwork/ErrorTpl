import Vue from 'vue'
import httpcode from '../layouts/httpcode.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    
  },
  render:h=>h(httpcode)
})
