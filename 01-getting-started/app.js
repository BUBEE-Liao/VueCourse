// const buttonEl = document.querySelector('button')
// const inputEl = document.querySelector('input')
// const listEl = document.querySelector('li')

// function addGoal() {
//     const enteredValue = inputEl.value;
//     if (!enteredValue) {
//         console.error("Empty value");
//         return;
//     }
//     const listItemEl = document.createElement('li')
//     listItemEl.textContent = enteredValue
//     listEl.append(listItemEl)
//     inputEl.value = ''
// }

// buttonEl.addEventListener('click', addGoal)


// VUE 2
// let app = new Vue({
//     el: '#app',
//     data: {
//         goals: [],
//         enteredValue: ''
//     },
//     methods: {
//         addGoal() {
//             this.goals.push(this.enteredValue)
//             this.enteredValue = ''
//         }
//     }
// })

// on this global vue object, we can call createApp
// createApp takes an object, a JavaScript object, where we configure this Vue app
// VUE 3
Vue.createApp({
    // this has to be called 'data'
    // in this scope, the rule is : key - value pair
    // below goes to : a property named data, which has a function as a value
    // also equlas -> data : function(){}
    data() {
        return {
            // add data we want to manage in this app
            goals: [],
            // both this will be used down bellow
            enteredValue: ''
        }
    },
    // key : methods, valud : an object
    methods: {
        // should be callable inside our html code
        addGoal() {
            // 'this' means the above 'enteredValue'
            goal = this.enteredValue
            if (goal == '') return;

            this.goals.push(goal);
            this.enteredValue = ''
        }
    }
    // mount : let Vue know which page should be controlled by that Vue app, according to <div id="app"> in html
}).mount('#app')