import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import firebase from 'firebase'
import basecss from './assets/css/style.css'

Vue.config.productionTip = false

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmOKxAcxt-mlzlIktjV10Xtw0ElMD7Ymk",
  authDomain: "my-cli-project-a924c.firebaseapp.com",
  projectId: "my-cli-project-a924c",
  storageBucket: "my-cli-project-a924c.appspot.com",
  messagingSenderId: "293336273742",
  appId: "1:293336273742:web:0d5ee5b47fed542688041f",
  measurementId: "G-F5BKT92SZ0"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  basecss,
  render: h => h(App)
}).$mount('#app')
