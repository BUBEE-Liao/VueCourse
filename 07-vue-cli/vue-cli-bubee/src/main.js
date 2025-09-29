/// import 'createApp' function from the 'vue' framework
import { createApp } from 'vue'
/// import 'App' from file 'App.vue'
/// .vue file are a special Vue.JS feature / a special Vue CLI project feature
/// .vue file allow us to write Vue apps and to be pricise, Vue components, in a much nicer way
/// they allow us to split our template, i.e. the HTML code belongs to an app or a component, script part and also some styles, into three parts
/// npm run serve(build) will transfer this code into vanilla javascript code, hence can be executed by browser
/// in App.vue, we exported as default, so when importing, we can named it as our choice
/// like import bubee from './App.vue' or something
import App from './App.vue'

/// we mount config from App.vue to the id="app" of index.html in 'public' directory
createApp(App).mount('#app')


/// main.js is the entry point
/// we will split our code into components and compose our user interface
/// and the entire Vue app by combining those components

/// how to write a Vue app from scratch:
/// 1. make sure all dependencies are installed(npm install)
/// 2. in src directory, create App.vue(you can use other name, e.g. app.vue, but is conventional)
/// 3. add a. <template></template>, b. <script></scirpt> c. <style></style>
/// 4. provide the configuration for our Vue app in <scripot> tag
/// 5. import our configuration from App.vue, and mount it to the html
/// 6. leave that index.html alone, instead using the <template> section, we can define our template in our app, like adding <h2> or something
/// 7. add components, compose components in App.vue(or in main.js)
/// 8. add <style>