import SerieService from '@/services/seriesService.js'

export const state = () => ({
  series: [],
  serie: {}
})

export const mutations = {
  SET_SERIES(state, series) {
    state.series = series
  },
  SET_SERIE(state, serie) {
    state.serie = serie
  }
}

export const actions = {
  searchSeries({ commit }, name) {
    return SerieService.getSearchSeries(name).then((response) => {
      commit('SET_SERIES', response.data)
    })
  },
  getSerieDetail({ commit }, id) {
    return SerieService.getSerie(id).then((response) => {
      commit('SET_SERIE', response.data)
    })
  }
}
