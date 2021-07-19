import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import VueKonva from 'vue-konva';

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueKonva);

Vue.prototype.$library = library

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
