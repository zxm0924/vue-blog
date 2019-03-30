// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入模块
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import Vuerouter from 'vue-router'
import Routes from './router'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(Vuerouter)

// 自定义指令
Vue.directive('pcolor', {
  bind(el, binding, vnode) {
    el.style.color = '#' + Math.random().toString(10).slice(2, 8)
  }
})

// 全局过滤
Vue.filter('sinpy', function (value) {
  return value.slice(0, 100) + '....'
})

// 创建路由
const router = new Vuerouter({
  routes: Routes,
  mode: "history"
}) 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router: router
})
