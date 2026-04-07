import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/index.css'

import { defineRule, configure } from 'vee-validate'
import { required, numeric, min } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import es from '@vee-validate/i18n/dist/locale/es.json'

defineRule('required', required)
defineRule('numeric', numeric)
defineRule('min', min)

// 3. Configurar mensajes en Español
configure({
  generateMessage: localize({
    es,
  }),
})

// 4. Establecer el idioma global a español
localize('es')

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
