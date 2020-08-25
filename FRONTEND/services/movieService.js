import { apiKey, apiClient } from './api/tmdb-instance'

export default {
	getSearchMovies(name) {
		return apiClient.get(
			'search/movie' + apiKey + '&query=' + name + '&language=fr'
		)
	},
	getMovie(id) {
		return apiClient.get('movie/' + id + apiKey + '&language=fr')
	}
}
