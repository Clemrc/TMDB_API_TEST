import axios from 'axios'

const apiKey = '?api_key=924f14ff6a746c367687d1d5a7fa4c58'

const apiClient = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	withCredentials: false,
	headers: {
		'Content-type': 'alication/json'
	}
})

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
