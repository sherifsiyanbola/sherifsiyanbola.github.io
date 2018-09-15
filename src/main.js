import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Routes from './routes'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

// Vue.directive('rainbow', {
//   bind(el, binding, vnode){
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//   }
// })

// registering directives globally
// Vue.directive('any', {
//   bind(el, binding, vnode){
//     el.style.backgroundColor = "#" + Math.random().toString().slice(2,8);
//   }
// })

// registering filters globally
// Vue.filter('to-uppercase', function(value){
//   return value.toUpperCase()
// })

// Vue.filter('snippet', function(value){
//   return value.slice(0,100) + "..."
// })
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
