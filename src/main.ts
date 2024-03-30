/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import Navbar from './layouts/default/AppBar.vue';

const app = createApp(App)
app.component('navbar', Navbar);

registerPlugins(app)

app.mount('#app')
