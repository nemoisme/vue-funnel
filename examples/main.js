import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import VueFunnel from './../lib/vue-funnel'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.component('vue-funnel',VueFunnel)
new Vue({
  render: h => h(App),
}).$mount('#app')