import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import store from './store'
import router from './router'
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

createApp(App)
.use(store)
.use(router)
.use(Vue3Toastify)
.mount('#app')




