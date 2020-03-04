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
    title: '未找到应用',
    text: '',
    talk: '诶，这个域名好像没有部署应用欸...'
  },
  render:h=>h(App)
}).$mount('#app')
