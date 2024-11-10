import './assets/tailwind.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";
import  { useAuthStore }  from '@/stores/auth.js';


axios.defaults.baseURL = 'http://ryo-advocate.test'
axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: 'none'
});

const authStore = useAuthStore()

authStore.attempt().then(() => {
app.mount('#app')
})