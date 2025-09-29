import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';

const app = createApp(App);

/// instead of declaring component in App.vue, we can add components here(main.js)
app.component('friend-contact', FriendContact);

app.mount('#app');
