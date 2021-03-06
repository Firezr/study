import Vue from 'vue'
import App from './App.vue'

import create from './utils/create'

// import store from './store'
import store from './kstore'
// import router from './router'
import router from './krouter'

Vue.config.productionTip = false

// Vue.prototype.$create = create
Vue.use(create)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
