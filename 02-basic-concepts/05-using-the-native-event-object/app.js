const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			lastName: '',
			confirmedName: '',
			// fullname: '',
		};
	},
	methods: {
		calculateTime() {
			const now = new Date();
			const hours = now.getHours();
			const minutes = now.getMinutes();
			const seconds =
				now.getSeconds() < 10
					? '0' + now.getSeconds()
					: now.getSeconds();
			const ms = now.getMilliseconds();
			const time = `${hours}:${minutes}:${seconds}:${ms}`;
			return time;
		},
		setName(event) {
			this.name = event.target.value;
		},
		confirmName() {
			if (this.name === '' || this.lastName === '') {
				this.confirmedName = '';
			} else {
				this.confirmedName = this.name + ' ' + this.lastName;
			}
		},
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
		},
		resetInput() {
			this.name = '';
			this.lastName = '';
		},
		methodDate() {
			return 'fafdsfds';
		},
	},
	// a watcher is basically a function you can tell Vue to execute when one of its dependencies changed
	// it just sounds like computed property
	// indeed, we can use watcher instead of computed properties
	// usage : set the function name to the data key name
	// we repeat another data or computed property name, as the method's name
	// that watcher method will be executed automatically by Vue, whenever the data of that name changes
	// we can use watcher as an alternative to a computed property
	watch: {
		// will automatically brings 'value', means the latest(new) value of 'counter' key variable
		counter(value) {
			if (value > 50 || value < 0) {
				this.counter = 0;
			}
		},
		// we can also use two parameters, new one and previous(old) one
		// name(newValue, oldValue) {
		// 	console.log('first');
		// 	if (newValue == '') {
		// 		this.fullname = '';
		// 	} else {
		// 		this.fullname = newValue + ' ' + this.lastName;
		// 	}
		// },
		// lastName(newValue, oldValue) {
		// 	console.log('last');
		// 	if (newValue == '') {
		// 		this.fullname = '';
		// 	} else {
		// 		this.fullname = this.name + ' ' + newValue;
		// 	}
		// },
	},
	// computed is like a data property (YOU DONT CALL IT), name it like property, not method
	// computed properties are essentially like methods
	// with one important difference, Vue will be aware of their dependencies and only re-execute them if one of the dependencies changed
	// we use it for performance sake
	// in computed, there're bunch of methods, just like 'methods'
	// key point : only use methods if you know that you want to recalculate a value whenever anything on the page changed
	// key point : and we bind our event to methods, not computed property
	// key point : we only use computed property for outputting something
	computed: {
		fullname() {
			console.log('Running output full name');
			if (this.name == '' && this.lastName == '') {
				return '';
			}
			return `${this.name} ${this.lastName}`;
		},
		computedTime() {
			const now = new Date();
			const hours = now.getHours();
			const minutes = now.getMinutes();
			const seconds =
				now.getSeconds() < 10
					? '0' + now.getSeconds()
					: now.getSeconds();
			const ms = now.getMilliseconds();
			const time = `${hours}:${minutes}:${seconds}:${ms}`;
			return time;
		},
	},
});

// `this` points to the vm instance
const vm = app.mount('#events');
// vm.counter
// vm.$data.counter;
