import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import jquery from 'jquery'
import './registerServiceWorker'
import router from './router'
import store from './store'
import MetaInfo from "vue-meta-info"
Vue.use(MetaInfo);
Vue.use(ElementUI);
window.jquery = window.$ = jquery // 全局挂载jquery
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted(){
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')

