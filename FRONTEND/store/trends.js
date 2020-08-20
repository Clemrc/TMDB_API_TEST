import TendanceService from '~/services/tendanceService.js'

export const state = () => ({
	trends: {}
})

export const mutations = {
	SET_TRENDS(state, trends) {
		state.trends = trends
	}
}

export const actions = {
	getTrendsWeek({ commit }) {
		return TendanceService.getAllWeekTrending().then((response) => {
			commit('SET_TRENDS', response.data)
		})
	},
	getTrendsDay({ commit }) {
		return TendanceService.getAllDayTrending().then((response) => {
			commit('SET_TRENDS', response.data)
		})
	},
	getTrendsMovieDay({ commit }) {
		return TendanceService.getMovieDayTrending().then((response) => {
			commit('SET_TRENDS', response.data)
		})
	},
	getTrendsMovieWeek({ commit }) {
		return TendanceService.getMovieWeekTrending().then((response) => {
			commit('SET_TRENDS', response.data)
		})
	},
	getTrendsTvShowWeek({ commit }) {
		return TendanceService.getTvShowWeekTrending().then((response) => {
			commit('SET_TRENDS', response.data)
		})
	},
	getTrendsTvShowDay({ commit }) {
		return TendanceService.getTvShowDayTrending().then((response) => {
			commit('SET_TRENDS', response.data)
		})
	}
}
