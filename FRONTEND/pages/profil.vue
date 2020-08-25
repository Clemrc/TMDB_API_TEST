<template>
	<div>
		<h1>Hello {{ $store.state.auth.account.username }}!</h1>
	</div>
</template>

<script>
export default {
	transition: 'slide-fade',
	middleware: 'auth'
}
</script>

<style></style>
