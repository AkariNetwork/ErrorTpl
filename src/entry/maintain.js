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
    talk: '在维护哦，可能要等一会咯'
  },
  render:h=>h(App)
}).$mount('#app')
