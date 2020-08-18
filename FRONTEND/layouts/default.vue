<template>
	<div>
		<Header></Header>
		<Hero class="hero"></Hero>
		<nuxt class="nuxt" />
	</div>
</template>

<script>
import Header from '@/components/header'
import Hero from '@/components/hero'

export default {
	name: 'App',
	components: {
		Header,
		Hero
	}
}
</script>

<style scoped>
.hero {
	padding-top: 3.3rem;
}

.nuxt {
	min-height: calc(100vh - 5.25rem);
	padding-top: 20px;
	background-color: #fff;
}

@media screen and (min-width: 1024px) {
	.hero {
		padding-top: 5.25rem;
	}

	.nuxt {
		width: 85%;
		margin: 0 auto;
	}
}
</style>
