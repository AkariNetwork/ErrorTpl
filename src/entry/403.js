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
    title: '403|权限拒绝',
    talk: '是不是在偷看不想让你看的地方呀？'
  },
  render:h=>h(App)
}).$mount('#app')
