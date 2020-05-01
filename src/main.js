import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from "view-design"
import '../src/assets/css/iview.less'
import '../src/assets/css/iconfont.css'
Vue.config.productionTip = false;


Vue.use(ViewUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
