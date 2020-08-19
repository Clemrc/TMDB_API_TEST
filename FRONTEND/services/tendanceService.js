import { apiKey, apiClient } from './api/tmdb-instance'

export default {
	getAllWeekTrending() {
		return apiClient.get('trending/all/week' + apiKey + '&language=fr')
	},
	getAllDayTrending() {
		return apiClient.get('trending/all/day' + apiKey + '&language=fr')
	},
	getMovieWeekTrending() {
		return apiClient.get('trending/movie/week' + apiKey + '&language=fr')
	},
	getMovieDayTrending() {
		return apiClient.get('trending/movie/day' + apiKey + '&language=fr')
	},
	getTvShowWeekTrending() {
		return apiClient.get('trending/tv/week' + apiKey + '&language=fr')
	},
	getTvShowDayTrending() {
		return apiClient.get('trending/tv/day' + apiKey + '&language=fr')
	}
}
