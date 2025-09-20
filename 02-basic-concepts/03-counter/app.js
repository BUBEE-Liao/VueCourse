const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			confirmedName: '',
			statusMsg: `You loaded this page on ${new Date().toLocaleString()}`,
		};
	},
	methods: {
		increment(num) {
			this.counter += num;
		},

		decrement(num) {
			if (this.counter < num) return;
			this.counter -= num;
		},
		setName(event, lastName) {
			// make full use of Javascript, we can get 'event' as params
			// this event contains full information, like user input value(event.target.value)
			this.name = `${event.target.value} ${lastName}`;
		},
		confirmInput() {
			this.confirmedName = this.name;
			console.log(this.confirmedName);
		},
		// in html, we mention that form will default reload the page, this's what we don't want to
		// so, we can use preventDefault() to disable default behavior of browser
		submitForm(event) {
			event.preventDefault();
			alert('Submitted');
		},
	},
});

app.mount('#events');
