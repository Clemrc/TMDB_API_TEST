<template>
	<p>SORTIE</p>
</template>

<script>
export default {
	transition: 'slide-fade',
	data() {
		return {
			title: 'Sortie de la semaine',
			subtitle: ''
		}
	},
	mounted() {
		this.$store.dispatch('title/setTitle', this.title)
		this.$store.dispatch('title/setSubTitle', this.subtitle)
	}
}
</script>

<style></style>
