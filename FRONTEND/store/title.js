export const state = () => ({
	title: '',
	subtitle: ''
})

export const mutations = {
	SET_TITLE(state, title) {
		state.title = title
	},
	SET_SUBTITLE(state, subtitle) {
		state.subtitle = subtitle
	}
}

export const actions = {
	setTitle({ commit }, title) {
		commit('SET_TITLE', title)
	},
	setSubTitle({ commit }, subtitle) {
		commit('SET_SUBTITLE', subtitle)
	}
}
