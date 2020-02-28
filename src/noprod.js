import Vue from 'vue'
import vuetify from './plugins/vuetify';
import page from './layouts/noprod.vue'
import footer from './components/footer.vue'
import settings from "./settings";
import psl from "psl";

Vue.config.productionTip = false

var parsed = psl.parse()

new Vue({
  vuetify,
  el: '#app',
  data: {
    domain: parsed.domain,
    domainowner: settings.domainowner
  },
  components: {
    footer
  },
  render:h=>h(page)
})
