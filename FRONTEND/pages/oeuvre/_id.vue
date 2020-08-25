<template>
	<div>
		<div class="content">
			<div v-for="image in images" :key="image.id" class="backdrop_path">
				<img :src="'http://localhost:1337' + image.url" />
			</div>
			<div class="details">
				<h1>{{ oeuvre.name }}</h1>
				<p>{{ oeuvre.description }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	transition: 'slide-fade',
	async fetch({ store, error, params }) {
		try {
			await store.dispatch('oeuvres/getOeuvreDetail', params.id)
		} catch (e) {
			error({
				statusCode: 503,
				message: 'Unable to get oeuvre #' + params.id
			})
		}
	},
	computed: mapState({
		oeuvre: (state) => state.oeuvres.oeuvre,
		images: (state) => state.oeuvres.images
	})
}
</script>

<style scoped>
.content {
	padding-top: 5.25rem;
	position: relative;
}

.backdrop_path {
	position: relative;
	height: 457px;
	width: 60%;
	overflow: hidden;
}

img {
	position: absolute;
}

.details {
	position: absolute;
	top: 0;
}
</style>
