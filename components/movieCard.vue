<template>
	<nuxt-link :to="'/movie/' + movie.id">
		<div class="moviecard">
			<p>{{ movie.id }} :</p>
			<p>{{ movie.original_title }}</p>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		movie: Object
	}
}
</script>

<style scoped>
.moviecard {
	min-height: 10px;
	margin: 0 10px;
	width: fit-content;
	padding: 10px;
	margin: 10px 0px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	transition: 0.2s;
}

.moviecard:hover {
	box-shadow: 0px 0px 10px black;
	transition: 0.2s;
}

.content p:not(:last-child) {
	margin: 0;
}
</style>
