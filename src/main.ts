import { createApp } from 'vue'
import './lib/kui.scss'
import App from './App.vue'
import './index.css'
import { router } from './router'
import 'github-markdown-css'
import './assets/font/font.css'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.mount('#app')