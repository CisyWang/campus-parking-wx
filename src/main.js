import Vue from 'vue'
import App from './App'
import store from './store'


let toast = function(value) {
  uni.showToast({
    title: value,
    icon: 'none',
    duration: 3000
  })
}

Vue.prototype.$toast = toast

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
