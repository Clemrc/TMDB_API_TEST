<template>
	<nav class="navbar has-shadow is-spaced">
		<div class="container">
			<div class="navbar-brand">
				<nuxt-link to="/" class="navbar-item">
					<p>ZQSD</p>
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
import gsap from 'gsap'
export default {
	mounted() {
		gsap.from('.navbar-item', {
			duration: 0.8,
			opacity: 0,
			y: -50,
			ease: 'power1',
			stagger: {
				each: 0.1,
				from: 'start'
			}
		})
		gsap.from('.navbar', {
			duration: 0.5,
			opacity: 0,
			y: -50,
			ease: 'power1'
		})
	}
}
</script>

<style scoped>
.navbar {
	position: fixed;
	width: 100%;
}

.navbar-item {
	margin: 0 3px;
}
</style>
