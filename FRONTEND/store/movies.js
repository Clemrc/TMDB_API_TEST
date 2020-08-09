import MovieService from '~/services/movieService.js'

export const state = () => ({
  movies: [],
  movie: {}
})

export const mutations = {
  SET_MOVIES(state, movies) {
    state.movies = movies
  },
  SET_MOVIE(state, movie) {
    state.movie = movie
  }
}

export const actions = {
  searchMovies({ commit }, name) {
    return MovieService.getSearchMovies(name).then((response) => {
      commit('SET_MOVIES', response.data)
    })
  },
  getMovieDetail({ commit }, id) {
    return MovieService.getMovie(id).then((response) => {
      commit('SET_MOVIE', response.data)
    })
  }
}
