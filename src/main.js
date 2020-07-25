import Vue from 'vue'
import App from './App.vue'
import Alert from 'z-vue-alert'

Vue.component('z-vue-alert', Alert)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
