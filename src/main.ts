import { createApp } from 'vue'
import App from './App.vue'

import {install} from '@twind/core'
import config from '../twind.config'
install(config)


createApp(App).mount('#app')
