import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.css'
import 'uimini/dist/css/uimini.css'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBgSWHUQDy-zQ9Ukua4t2dGWgILXvinbPA",
    authDomain: "myvet-c21a4.firebaseapp.com",
    databaseURL: "https://myvet-c21a4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "myvet-c21a4",
    storageBucket: "myvet-c21a4.appspot.com",
    messagingSenderId: "832569555370",
    appId: "1:832569555370:web:c50da6f32edb2971b053d3",
    measurementId: "G-BEL3WEM50F"
  };
  firebase.initializeApp(firebaseConfig);
createApp(App).use(store).use(router).mount('#app')
