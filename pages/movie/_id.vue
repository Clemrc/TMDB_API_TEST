<template>
	<div>
		<h1>{{ movie.original_title }}</h1>
		<p>{{ movie.id }}</p>
		<p>{{ movie.overview }}</p>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	transition: 'slide-fade',
	async fetch({ store, error, params }) {
		try {
			await store.dispatch('movies/getMovieDetail', params.id)
		} catch (e) {
			error({
				statusCode: 503,
				message: 'Unable to get movie #' + params.id
			})
		}
	},
	computed: mapState({
		movie: (state) => state.movies.movie
	})
}
</script>
