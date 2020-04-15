import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Chat from './components/Chat.vue';
import Login from './components/Login.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Login },
  { path: '/chat/nickname=:nickname', component: Chat }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')