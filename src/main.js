import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import App from './App.vue';
import VueGtag from 'vue-gtag';
//import CookieConsent from 'cookieconsent';
//console.log(CookieConsent);

const gaid = process.env.VUE_APP_GOOGLE_ANALYTICS_ID;

if (gaid) {
  Vue.use(VueGtag, {
    config: { id: gaid }
  });
}

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');