<template>
	<ul>
		<knowledge-element
			v-for="topic in topics"
			:key="topic.id"
			:id="topic.id"
			:topic-name="topic.title"
			:description="topic.description"
		></knowledge-element>
	</ul>
</template>

<script>
export default {
	/// inject data provided by higher up component
	/// replace props with 'inject', which works together with provide
	/// it's basically works like props
	/// NOTE : we can ONLY inject what has been provided on a higher-up level
	///        which basically means, in a parent component
	/// if we provided in ActiveElement.vue, we cannot inject in here, because they're not parent-child relationship
	inject: ['topics'],
};
</script>