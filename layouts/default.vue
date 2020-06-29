<template>
	<div>
		<no-ssr>
			<Header></Header>
		</no-ssr>
		<div class="default-main">
			<nuxt class="nuxt" />
		</div>
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
html {
	font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, 'Helvetica Neue', Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}

.default-main {
	min-height: 100vh;
	padding-top: 100px;
	background-color: #f7f8fb;
}

.nuxt {
	width: 90%;
	margin: 0 auto;
}
</style>
