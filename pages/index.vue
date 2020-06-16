<template>
	<div class="main">
		<div class="content">
			<no-ssr>
				<div class="search">
					<h2 class="subtitle">recherche films</h2>

					<form name="movie_name" @submit.prevent="searchMovie">
						<input
							id="movie_search"
							v-model="movie_search"
							type="text"
							name="movie_search"
						/>
					</form>
				</div>
			</no-ssr>

			<movieContainer class="movie-container"></movieContainer>
		</div>
	</div>
</template>

<script>
// import gsap from 'gsap'
import movieContainer from '@/components/movieContainer'

export default {
	components: {
		movieContainer
	},
	data() {
		return {
			movie_search: ''
		}
	},
	// mounted() {
	//   gsap.from('.main', {
	//     duration: 0.8,
	//     opacity: 0,
	//     y: 100,
	//     ease: 'power1'
	//   })
	// },
	methods: {
		searchMovie() {
			this.$store.dispatch('movies/searchMovies', this.movie_search)
		}
	}
}
</script>

<style scoped>
.content {
	display: flex;
	justify-content: space-between;
}

.search {
	padding-top: 53px;
	flex-grow: 1;
	position: fixed;
}

.movie-container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	flex-grow: 2;
}

.title {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}

ul {
	margin-top: 10px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
}
li {
	list-style: none;
}

.slide-enter {
	transform: translateX(10px);
	opacity: 0;
}

.slide-enter-active {
	transition: all 0.5s ease-in-out;
}

.slide-move {
	transition: transform 0.5s ease-out;
}

@media screen and (min-width: 1024px) {
	.search {
		padding-top: 100px;
	}
}
</style>
