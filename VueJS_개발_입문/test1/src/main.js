import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 전역 component 등록 시 new Vue() 전인 여기에. 

new Vue({
  router,
  store,
  render: h => h(App) // App 를 render 함.
}).$mount('#app') // index.html 의 <div id="app"></div> 와 연결
