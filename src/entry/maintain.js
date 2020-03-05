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
    title: '应用维护中',
    talk: '哎呀别急嘛，过一会再来嘛'
  },
  render:h=>h(App)
}).$mount('#app')
