import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/main.css'
import './assets/styles/index.css'
import './assets/styles/components.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
