<template>
	<div>
		<Header></Header>
		<nuxt class="nuxt" />
	</div>
</template>

<script>
import Header from '@/components/header'

export default {
	components: {
		Header
	}
}
</script>

<style scoped>
.nuxt {
	width: 90%;
	margin: 0 auto;
	min-height: 100vh;
	padding-top: calc(5.25rem + 20px);
}
</style>
