<template>
	<div>
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
import gsap from 'gsap'
import movieCard from '@/components/movieCard'
export default {
	components: {
		movieCard
	},
	data() {
		return {
			clement: [{ color: 'white' }, { size: 'L' }]
		}
	},
	updated() {
		gsap.from('.movie', {
			duration: 1,
			delay: 0.2,
			opacity: 0,
			y: 200,
			ease: 'expo',
			stagger: {
				each: 0.1,
				from: 'start'
			}
		})
	},
	computed: mapState({
		movies: (state) => state.movies.movies.results
	})
}
</script>

<style></style>
