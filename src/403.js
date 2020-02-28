import Vue from 'vue'
import vuetify from './plugins/vuetify';
import page from './layouts/403.vue'
import footer from './components/footer.vue'

Vue.config.productionTip = false

new Vue({
  vuetify,
  el: '#app',
  components: {
    footer
  },
  render:h=>h(page)
})
