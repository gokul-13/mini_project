import { createApp } from 'vue'
import App from './App.vue'
import FirstPage from './views/FirstPage';
import router from './router'

createApp(App).use(router).mount('#app')
