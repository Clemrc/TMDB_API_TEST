<template>
	<div class="movie-container">
		<movieCard
			v-for="movie in movies"
			:key="movie.id"
			class="movie"
			:movie="movie"
		></movieCard>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import movieCard from '@/components/movieCard'
export default {
	components: {
		movieCard
	},
	computed: mapState({
		movies: (state) => state.movies.movies.results
	})
}
</script>

<style>
.movie-container {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	flex-grow: 2;
	width: 50%;
	margin: 0px 20px;
}
</style>
