<template>
	<div>
		<div class="content">
			<section class="trends">
				<h2 class="trends-title">Tendance de la semaine</h2>
				<div class="trends-content">
					<div v-for="trend in trends" :key="trend.id">
						<nuxt-link :to="'/movie/' + trend.id">
							<div v-if="trend.media_type == 'movie'" class="trend">
								<p class="trend-title">{{ trend.original_title }}</p>
								<img
									:src="
										`https://image.tmdb.org/t/p/original` + trend.poster_path
									"
								/>
							</div>
						</nuxt-link>
						<nuxt-link :to="'/tv_show/' + trend.id">
							<div v-if="trend.media_type == 'tv'" class="trend">
								<p class="trend-title">{{ trend.name }}</p>
								<img
									:src="
										`https://image.tmdb.org/t/p/original` + trend.poster_path
									"
								/>
							</div>
						</nuxt-link>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data() {
		return {
			title: 'Bienvenue',
			subtitle: ''
		}
	},
	mounted() {
		this.$store.dispatch('title/setTitle', this.title)
		this.$store.dispatch('title/setSubTitle', this.subtitle)
		this.$store.dispatch('trends/getTrendsWeek')
	},
	computed: mapState({
		trends: (state) => state.trends.trends.results
	})
}
</script>

<style scoped>
@media screen and (min-width: 1024px) {
	.content {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.trends-title {
		margin-left: 20px;
	}

	.trends-content {
		display: flex;
		justify-content: space-around;
		align-items: flex-start;
		flex-wrap: wrap;
	}

	.trend {
		width: 200px;
		padding: 10px;
		margin: 10px;
		background-color: #fff;
		overflow: hidden;
		border-radius: 5px;
		transition: 0.2s;
	}

	.trend:hover {
		box-shadow: 0 0 15px #4a4a4a;
		transition: 0.2s;
	}

	.trend-title {
		height: 50px;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	img {
	}
}
</style>
