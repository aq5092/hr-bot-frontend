import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()
// Telegram WebApp ma'lumotlarini saqlash
if (window.Telegram?.WebApp) {
  app.config.globalProperties.$tg = window.Telegram.WebApp
  app.config.globalProperties.$user = window.Telegram.WebApp.initDataUnsafe.user
}
createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
