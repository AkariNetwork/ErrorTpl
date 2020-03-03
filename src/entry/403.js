import Vue from 'vue'
import MuseUI from 'muse-ui';
import httpcode from '../layouts/httpcode.vue'
import 'typeface-roboto'
import 'muse-ui/dist/muse-ui.css';
import '../document'

Vue.use(MuseUI);
Vue.config.productionTip = false

new Vue({
  data: {
    code: '403',
    text: ''
  },
  render:h=>h(httpcode)
}).$mount('#app')
