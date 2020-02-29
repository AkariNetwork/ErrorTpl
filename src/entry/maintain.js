import Vue from 'vue'
import prodlint from '../layouts/prodlint.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    
  },
  render:h=>h(prodlint)
})
