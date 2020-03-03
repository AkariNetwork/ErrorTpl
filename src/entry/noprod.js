import Vue from 'vue'
import MuseUI from 'muse-ui';
import prodlint from '../layouts/prodlint.vue'
import 'typeface-roboto'
import 'muse-ui/dist/muse-ui.css';
import '../document'

Vue.use(MuseUI);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    
  },
  render:h=>h(prodlint)
})
