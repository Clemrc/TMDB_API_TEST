<template>
	<div>
		<div class="content">
			<movieContainer></movieContainer>
			<collectionContainer></collectionContainer>
		</div>
	</div>
</template>

<script>
import movieContainer from '@/components/movieContainer'
import collectionContainer from '@/components/collectionContainer'

export default {
	transition: 'slide-fade',
	components: {
		movieContainer,
		collectionContainer
	},
	data() {
		return {
			title: 'Films',
			subtitle: `Retrouver les film que vous avez ou aimeriez voir !`
		}
	},
	mounted() {
		this.$store.dispatch('title/setTitle', this.title)
		this.$store.dispatch('title/setSubTitle', this.subtitle)
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

	.content {
		display: flex;
		justify-content: space-between;
		min-height: 80vh;
	}
}
</style>
