import Vue from 'vue'
import App from '@/app'
import router from '@/router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
