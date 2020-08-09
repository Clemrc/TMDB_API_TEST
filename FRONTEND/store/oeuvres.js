import OeuvresService from '~/services/oeuvresService.js'

export const state = () => ({
  oeuvres: [],
  oeuvre: {},
  images: []
})

export const mutations = {
  SET_OEUVRES(state, oeuvres) {
    state.oeuvres = oeuvres
  },
  SET_OEUVRE(state, oeuvre) {
    state.oeuvre = oeuvre
  },
  SET_IMAGES(state, images) {
    state.images = images
  }
}

export const actions = {
  getOeuvres({ commit }) {
    return OeuvresService.getOeuvres().then((response) => {
      commit('SET_OEUVRES', response.data)
    })
  },
  getOeuvreDetail({ commit }, id) {
    return OeuvresService.getOeuvreDetail(id).then((response) => {
      commit('SET_OEUVRE', response.data)
      commit('SET_IMAGES', response.data.images)
    })
  }
}
