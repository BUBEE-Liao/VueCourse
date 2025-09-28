const app = Vue.createApp({
	data() {
		return {
			currentUserInput: '',
			message: 'Vue is great!',
		};
	},
	methods: {
		saveInput(event) {
			this.currentUserInput = event.target.value;
		},
		setText() {
			/// without using ref, we use below:
			// this.message = this.currentUserInput;
			// now we only store (directly) it when we need it
			/// ref will store a key value pair, key : userText(defined by us), value : user input
			this.message = this.$refs.userText.value;
		},
	},
	beforeCreate() {
		console.log('Before create');
	},
	created() {
		console.log('Created');
	},
	/// beforeMount : means that this is right before Vue is actually going to bring something to the screen
	/// right before we can see somthing on the screen
	beforeMount() {
		console.log('Before mount');
	},
	/// we can already see something on the screen
	mounted() {
		console.log('Mounted');
	},
	/// before something is changed
	beforeUpdate() {
		console.log('Before update');
	},
	/// after something is changed
	updated() {
		console.log('Updated');
	},
	/// before the app is going to be removed
	beforeUnmount() {
		console.log('Before unmount');
	},
	/// we haven't seen this, but it's important as well
	/// when an app is unmounted all it's content is removed from the screen and the app is dead
	unmounted() {
		console.log('Unmounted');
	},
});
const vm = app.mount('#app');

setTimeout(() => {
	app.unmount();
}, 3000);

/// separate app works stand alone
/// by mounting your app to a certain ploace in the DOM in the HTML code, we make that part of the HTML code the 'template' of that Vue app
const app2 = Vue.createApp({
	/// instead define template in HTML file, we can add template in Vue app, will achieve the same goal
	template: `
    <p>{{ favoriteMeal }}</p>
    `,
	data() {
		return {
			favoriteMeal: 'zucchini with whole-grain rice and chicken breast',
		};
	},
});
app2.mount('#app2');

// ... Javascript Proxy

const data = {
	msg: 'Hello!',
	longMsg: 'Hello! World!',
};

const handler = {
	/// we can define a setter function which is triggered whenever a property is set to a new value on this proxy
	/// and then we can find out which property that is, what the new value is, and which original object we wrapped
	set(target, key, value) {
		// console.log(target); /// object that was wrapped
		// console.log(key); /// property that I set new value to
		// console.log(value); /// value that was set
		if (key === 'msg') {
			target.longMsg = value + ' World!';
		}
		target.msg = value;
	},
};

const proxy = new Proxy(data, handler);

proxy.msg = 'Bye Felicia';


/// what proxy can do : re-calculate
/// if we assign msg = 'a', and longMsg = msg + 'b', longMsg will be 'ab'
/// but if we reasign msg = 'c', longMsg will still be 'ab', not 'cb'
/// using proxy, we can make longMsg more reactive
/// this is how vue works under the hook