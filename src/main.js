import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
