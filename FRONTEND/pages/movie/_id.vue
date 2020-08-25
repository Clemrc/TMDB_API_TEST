<template>
	<div>
		<div class="content">
			<div class="backdrop_path">
				<img
					:src="`https://image.tmdb.org/t/p/original` + movie.backdrop_path"
				/>
			</div>
			<div class="details">
				<h1>{{ movie.original_title }}</h1>
				<p>{{ movie.overview }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	layout: 'nohero',
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

<style scoped>
.content {
	padding-top: 5.25rem;
	position: relative;
}

.backdrop_path {
	position: relative;
	height: 457px;
	width: 60%;
	overflow: hidden;
}

img {
	position: absolute;
}

.details {
	position: absolute;
	top: 0;
}
</style>
