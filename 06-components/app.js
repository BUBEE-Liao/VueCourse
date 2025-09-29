const app = Vue.createApp({
	data() {
		return {
			friends: [
				{
					id: 'marin1',
					name: 'Marin Muheljić',
					phone: '095 372 8167',
					email: 'dunelover69@hot.com',
				},
				{
					id: 'marian1',
					name: 'Marian Babić',
					phone: '097 867 4990',
					email: 'twinlover2@mail.com',
				},
			],
		};
	},
});


/// this tells Vue that we want to create a new component
/// Now this component method needs three things
/// 1. an identifier(this is imortant, we have to memorize it, a component is basically like a custom HTML element), So here we define our own HTML tag, must have dash(-) between
///    we can't we something like 'h2', it will clash, it's better that we use multiple words connected with dash, because all HTML tag is one word
/// 2. a config object just as you pass it to create app
///    because, and that's another important piece of information to keep in mind
///    a Vue component is essentially just another Vue app, just an app belongs to another app
///    so below is a new app which will be connected to our main app, it's like a mini app
/// 3. template, since this's a new app, it needs its own
/// take away : how a component helps us envapsulate structure, content and logic into small reusable pieces
app.component('friend-contact', {
	template: `
    <ul>
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails">
                {{ detailsAreVisible ? 'Hide' : 'Show'}} Details
            </button>
            <ul v-show="detailsAreVisible">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    </ul>
    `,
	data() {
		return {
			detailsAreVisible: false,
			friend: {
				id: 'marin1',
				name: 'Marin Muheljić',
				phone: '095 372 8167',
				email: 'dunelover69@hot.com',
			},
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},
});

const vm = app.mount('#app');


/// motivation : if we use v-for and v-if to toggle this situation
/// we'll find out that all elements sharing the same state : 'Show Detail'
/// there're several work around, like building seperate state for all elements, controll the specific state by id or index
/// however, we can use compoenet as well


/// note from udemy : Multiple Vue Apps vs Multiple Components
// You might recall lecture 3 ("Different Ways of Using Vue"): You can use Vue.js to control parts of (possibly multiple HTML) pages OR you use it to build so-called "Single Page Applications" (SPAs).

// If you control multiple, independent parts of HTML pages, you will often work with multiple Vue apps (i.e. you create multiple apps by calling createApp() more than once).

// On the other hand, if you're building a SPA, you typically work with just one "root app" (i.e. createApp() is only used once in your entire codebase) and you instead build up a user interface with multiple components.

// You absolutely are allowed to also use components in cases where you have multiple Vue apps but you typically won't use multiple Vue apps if you build one big connected user interface.

// Why?

// Because Vue apps are independent from each other - they can't really communicate with each other. You might find "hacks" to make it work but there's no great "official" way of sharing data between apps, updating something in app A in case something happens in app B etc.

// Components on the other hand - as you will learn soon - DO offer certain communication mechanisms that allow you to exchange data between them. Hence you can build one connected UI if you work with one root app that holds multiple components.

// You'll see that in the lectures and throughout the entire course, especially in the course projects of course!