// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import MuseUI from 'muse-ui'
import theme from 'muse-ui/lib/theme';
import Vuex from 'vuex'

import App from './App'

import router from './router'

Vue.use(MuseUI)
Vue.use(Vuex)
Vue.use(VueResource)
theme.use('light');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.http.interceptors.push((request, next) => {
  // request.credentials = true
  next()
})