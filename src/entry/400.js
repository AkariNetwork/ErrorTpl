import Vue from 'vue'
import MuseUI from 'muse-ui';
import App from '../App.vue'
import 'typeface-roboto'
import 'muse-ui/dist/muse-ui.css';
import '../document'

Vue.use(MuseUI);
Vue.config.productionTip = false

new Vue({
  data: {
    title: '400|请求错误',
    talk: '哎呀，出现错误了呢，要不刷新或者等一会再请求试试吧'
  },
  render:h=>h(App)
}).$mount('#app')
