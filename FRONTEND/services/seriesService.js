import { apiKey, apiClient } from './api/tmdb-instance'

export default {
  getSearchSeries(name) {
    return apiClient.get(
      'search/tv' + apiKey + '&query=' + name + '&language=fr'
    )
  },
  getSerie(id) {
    return apiClient.get('tv/' + id + apiKey + '&language=fr')
  }
}
