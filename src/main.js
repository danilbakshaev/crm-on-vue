import Vue from 'vue'
import App from './App.vue'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from './filters/currency.filter'
import localizeFilter from './filters/localize.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import Vuelidate from 'vuelidate'
import messagePlugin from '@/utils/message.plugin'
import titlePlugin from '@/utils/title.plugin'
import 'materialize-css/dist/js/materialize.min'
import Loader from '@/components/app/Loader'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(VueMeta)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: 'AIzaSyCqO0_-0KKhdcNmgGMHjuWlwj1EqbFe2vM',
  authDomain: 'crm-vue-ae010.firebaseapp.com',
  projectId: 'crm-vue-ae010',
  storageBucket: 'crm-vue-ae010.appspot.com',
  messagingSenderId: '342719283033',
  appId: '1:342719283033:web:5611bd4dff7f5a0c4c1648',
  measurementId: 'G-SQQBPMJFC2'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
