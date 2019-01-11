import Vue from 'vue'
import App from './App.vue'

import Skeleton from './index'
Vue.use(Skeleton);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
