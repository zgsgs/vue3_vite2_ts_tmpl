import { createApp } from 'vue'
import App from './App.vue'
import { worker } from './mocks/browser'

const isDev = process.env.NODE_ENV === 'development'
if (isDev) {
  worker.start()
}

createApp(App).mount('#app')
