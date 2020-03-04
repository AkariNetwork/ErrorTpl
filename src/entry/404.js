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
    title: '404|页面不存在',
    talk: '哎呀，你来到了一个不存在的世界耶'
  },
  render:h=>h(App)
}).$mount('#app')
