// step1. create a Vue app
// Vue.createApp() : need an object as input -> Vue.createApp({})
// inside input (object), there's key : value pair
const app = Vue.createApp({
    // step3. configure 'data' property
    // this means : in the data property(key), is a function
    // equals : data : function(){...}
    // this funciton should do one very simple yet important thing : returns an object, and always an object
    // in this returned object, we can now setup any key value pairs with any key(property name) and any value
    // how to bind this data -> use {{key}} in html, it will shows value dynamically, this is so called 'interpolation'
    data() {
        return {
            courseGoalA: "Have fun and learn stuff",
            courseGoalB: "Be the best coder in the whole wide world",
            courseGoalC: "<em>Be the best coder in the whole wide world</em>",
            vueLink: 'https://vuejs.org',
            message: 'You loaded this page on ' + new Date().toLocaleString()
        }
    },
    // step4. configure 'methods' property
    // methods allows we to define functions which should execute when something happens
    // methods is key(property), and object is value
    // inside the value(object), is a key valud pair
    methods: {
        // equals: outputGoal : function(){...}
        outputGoal() {
            const randomNumber = Math.random()
            // vue does some magic here
            // it takes all the data you return in data object and merges it into a global Vue instance object
            // so we can use 'this' to access property in data when we were in methods
            return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB
        }
    }
})
// step2. mount Vue app to certain html code
app.mount('#user-goal')

