import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from "./router/index.js";

const app = createApp(App);
app.component(
    // the registered name
    'MyComponent',
    // the implementation
    {
        /* ... */
    }
)
app.use(router);
app.mount('#app');

