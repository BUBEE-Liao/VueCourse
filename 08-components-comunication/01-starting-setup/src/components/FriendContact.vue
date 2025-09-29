<template>
	<li>
		<h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>

		<button @click="toggleFavorite">Toggle Favorite</button>
		<button @click="toggleDetails">
			{{ detailsAreVisible ? 'Hide' : 'Show' }} Details
		</button>

		<ul v-if="detailsAreVisible">
			<li>
				<strong>Phone:</strong>
				{{ phoneNumber }}
			</li>
			<li>
				<strong>Email:</strong>
				{{ emailAddress }}
			</li>
		</ul>
		<!-- instead of declaring $emit in method, we can directly use it in template -->
		<button @click="$emit('delete', this.id)">Delete</button>
	</li>
</template>

<script>
export default {
	// props: ['name', 'phoneNumber', 'emailAddress'],
	/// props is short for properties
	/// we can think of props like custom HTML attributes
	/// we want to pass some parameters in the top layer of components
	/// so we can use different way to create multiple different components
	/// greate point: components can be used multiple times with different data
	props: {
		/// key of props can be treated as 'data', name of property can be defined by us(conventional : camel case)
		/// NOTE : when passing parameter in App.vue, we use xxx-ooo, but in component props, we use xxxOoo(converted by Vue)
		/// it's so called parent-child communication(parent -> child, unidirection data flow)
		/// NOTE : there's another important point : we cannot change value of props inside child(component), which is used in parent(App.vue)
		///	if we want to, there're two ways: 1. let parent know we'd like to change it 2. using props as initial value of 'data' property(re-asign props to some property of 'data' in components), and then change the data property in component
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		emailAddress: {
			type: String,
			required: true,
		},
		isFavorite: {
			type: Boolean,
			/// value of default can be a function, determined default value using more complex way
			default: true,
			required: true,
		},
		/// In general, you can learn all about prop validation in the official docs: https://v3.vuejs.org/guide/component-props.html
		/// Specifically, the following value types (type property) are supported:
		/// String, Number, Boolean, Array, Object, Date, Function, Symbol
	},
	/// emits, so to say, is the counterpart to props
	/// in props, you define which props this component receives
	/// in emits you will define which custom events your component will eventually at some point emit
	/// we doing this to document our component, to make it obvious to other developers how our components work
	/// and to which events we can listen, it makes it easier to understand our component
	/// otherwise, we have to see that there's some code where we emit some events
	emits: ['toggle-favorite', 'delete'],
	/// instead of using above, we can use below, provide a more detailed configuration
	/// the configuration we should then add is a function, recieve the data which we eventually will emit as parameters
	// emits: {
	// 	'toggle-favorite': function(id) {
	// 		if (id) {
	// 			return true;
	// 		}
	// 		console.warn('Id is missing');
	// 		return false;
	// 	},
	// },
	data() {
		return {
			detailsAreVisible: false,
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
		toggleFavorite() {
			/// $emit is a child-parent communication(child -> parent, unidirection data flow)
			/// that's a build-in method, which you can call from inside a Vue component under 'this' keyword
			/// this allows we to emit our own custom event to which we then can listen from inside the parent component
			/// 'toggle-favorite' is the event name used in App.vue, this.id can tell App.vue which favorite App.vue gonna change
			/// so the attribute of App.vue changed(due to $emit), and App.vue will pass the changed state into component, so the component can show the changed state
			// emit our custom events, defina arguments which are passed in when event cought
			this.$emit('toggle-favorite', this.id);
			/// we can also write $emit directly in template above, like below
			// <button @click="$emit('toggle-favorite', this.id">Toggle Favorite</button>
		},
	},
};
</script>
