// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { routes } from './router/routes'

import Router from 'vue-router'

import VueFire from 'vuefire'
import VueResource from 'vue-resource'
// import Firebase from 'firebase'

import Hello from './components/Hello'
import oTransitions from './components/oTransitions'

import Server from './components/Server'
import ServerDetail from './components/Server-detail'

import Forms from './components/Forms'
import Directives from './components/Directives'
import List from './components/List'

import Quotes from './components/quotes/Quotes'
import QuoteMain from './components/quotes/QuoteMain'
import QuoteGrid from './components/quotes/QuoteGrid'
import NewQuote from './components/quotes/newQuote'
import Header from './components/quotes/Header'

import User from '@/components/User'


Vue.component('appHello', Hello)
Vue.component('appTransition', oTransitions)

Vue.component('app-server', Server)
Vue.component('app-server-detail', ServerDetail)

Vue.component('appQuote', Quotes)
Vue.component('appQuoteMain', QuoteMain)
Vue.component('appQuoteGrid', QuoteGrid)
Vue.component('appNewQuote', NewQuote)
Vue.component('appHeader',Header)

Vue.component('appForm', Forms)
Vue.component('appDirective', Directives)
Vue.component('appList', List)

Vue.component('appUser', User)


Vue.use(VueFire)
Vue.use(VueResource)

Vue.http.options.root = 'https://laxistech-54e69.firebaseio.com/'

Vue.config.productionTip = false


// let config = {
//   apiKey: 'AIzaSyBeAdSk6zAkN7H03WgSmTjUFRwQQ-YZAew',
//   authDomain: 'laxistech-54e69.firebaseapp.com',
//   databaseURL: 'https://laxistech-54e69.firebaseio.com',
//   projectId: 'laxistech-54e69',
//   storageBucket: 'laxistech-54e69.appspot.com',
//   messagingSenderId: '652978401638'
// }
//
// let app = Firebase.initializeApp(config)
// let db = app.database()

// let quotesRef = db.ref('notes')

Vue.directive('highlight',{

  bind(el, binding, vnode){
    // el.style.color = 'yellow';
    // el.style.color = binding.value;

    let delay = 0;
    if(binding.modifiers['delayed']){
      delay = 5000
    }
    setTimeout(() => {
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value;
        el.style.padding = 8 + 'px';
        el.style.color = 'white';
        el.style.borderRadius = 5 + 'px';
      }else if (binding.arg == 'color') {
        el.style.color = binding.value;
      }else{
        el.style.color = binding.value;
      }
    } ,delay);

  }
});

Vue.filter('toUpper', (value) => {
  return value.toUpperCase();
})

export const eventBus = new Vue({
  methods: {
    changeAge (age) {
      this.$emit('ageWasEdit', age);
    }
  }
});

Vue.use(Router);

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: {
    App,
  }
})
