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

				<div v-if="isAuthenticated" class="navbar-end">
					<div class="navbar-item has-dropdown is-hoverable">
						<a class="navbar-link">
							{{ loggedInUser.username }}
						</a>

						<div class="navbar-dropdown">
							<a class="navbar-item" href="/profile">My Profile</a>
							<hr class="navbar-divider" />
							<a class="navbar-item" @click="logout">Logout</a>
						</div>
					</div>
				</div>

				<div v-if="!isAuthenticated" class="navbar-end buttons">
					<nuxt-link to="/register" class="button is-primary">
						<p>Register</p>
					</nuxt-link>
					<nuxt-link to="/login" class="button is-light">
						<p>Login</p>
					</nuxt-link>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			movie_search: ''
		}
	},
	computed: {
		...mapGetters(['isAuthenticated', 'loggedInUser'])
	},
	mounted() {
		// Get all "navbar-burger" elements
		const $navbarBurgers = Array.prototype.slice.call(
			document.querySelectorAll('.navbar-burger'),
			0
		)
		// Check if there are any navbar burgers
		if ($navbarBurgers.length > 0) {
			// Add a click event on each of them
			$navbarBurgers.forEach((el) => {
				el.addEventListener('click', () => {
					// Get the target from the "data-target" attribute
					const target = el.dataset.target
					const $target = document.getElementById(target)
					// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
					el.classList.toggle('is-active')
					$target.classList.toggle('is-active')
				})
			})
		}
	},
	methods: {
		searchMovie() {
			this.$store.dispatch('movies/searchMovies', this.movie_search)
			this.$router.push({ path: '/film' })
		},
		async logout() {
			await this.$auth.logout()
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
