import Vue from 'vue'
import 'mdui/dist/css/mdui.css'
import prodlint from '../layouts/prodlint.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    
  },
  render:h=>h(prodlint)
})
