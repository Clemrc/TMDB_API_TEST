<template>
	<nav class="navbar is-spaced is-fixed-top has-shadow">
		<div class="container">
			<div class="navbar-brand">
				<nuxt-link to="/" class="navbar-item">
					<p>SEPTIEME_ART</p>
				</nuxt-link>
			</div>

			<div class="navbar-menu">
				<div class="navbar-start">
					<nuxt-link to="/sortie" class="navbar-item">
						<p>Sortie de la semaine</p>
					</nuxt-link>
					<nuxt-link to="/film" class="navbar-item">
						<p>Films</p>
					</nuxt-link>
					<nuxt-link to="/serie" class="navbar-item">
						<p>Series</p>
					</nuxt-link>
					<nuxt-link to="/oeuvres" class="navbar-item">
						<p>Oeuvres</p>
					</nuxt-link>
				</div>

				<div class="field">
					<div class="control">
						<form name="movie_name" @submit.prevent="searchMovie">
							<input
								id="movie_search"
								v-model="movie_search"
								type="text"
								name="movie_search"
								class="input"
								placeholder="search"
							/>
						</form>
						<button class="button is-link" @click="searchMovie">Submit</button>
					</div>
				</div>

				<div class="navbar-end">
					<nuxt-link to="/profil" class="navbar-item">
						<p>Profil</p>
					</nuxt-link>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			movie_search: ''
		}
	},
	methods: {
		searchMovie() {
			this.$store.dispatch('movies/searchMovies', this.movie_search)
			this.$router.push({ path: '/' })
		}
	}
}
</script>

<style scoped>
.navbar {
	width: 100%;
}

.navbar-item {
	margin: 0 3px;
}

.field {
	width: 40%;
	margin-bottom: 0;
	display: flex;
	align-items: center;
}

.control {
	width: 100%;
	display: flex;
}

form {
	width: 100%;
	margin-right: 10px;
}

@media screen and (max-width: 1023px) {
	.container {
		padding: 0px 20px;
		display: flex;
		justify-content: space-between;
	}

	.navbar-menu {
		display: block;
	}

	.navbar-start,
	.navbar-end {
		display: none;
	}

	.field {
		width: 100%;
		margin-bottom: 0;
		display: flex;
		align-items: center;
	}
}
</style>
