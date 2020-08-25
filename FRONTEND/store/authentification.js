// import AuthentificationService from '~/services/authentificationService.js'

// const cookieparser = process.server ? require('cookieparser') : undefined

// export const state = () => {
// 	return {
// 		jwt: null,
// 		account: {}
// 	}
// }

// export const mutations = {
// 	SET_AUTH(state, jwt) {
// 		state.jwt = jwt
// 	},
// 	SET_ACCOUNT(state, account) {
// 		state.account = account
// 	}
// }

// export const actions = {
// 	nuxtServerInit({ commit }, { req }) {
// 		let jwt = null
// 		if (req.headers.cookie) {
// 			const parsed = cookieparser.parse(req.headers.cookie)
// 			try {
// 				jwt = JSON.parse(parsed.jwt)
// 			} catch (err) {
// 				// No valid cookie found
// 			}
// 		}
// 		commit('setAuth', jwt)
// 	},
// 	login({ commit }, loginPayload) {
// 		const Cookie = process.client ? require('js-cookie') : undefined
// 		const email = loginPayload.email
// 		const password = loginPayload.password
// 		return AuthentificationService.postLogin(email, password).then(
// 			(response) => {
// 				commit('SET_ACCOUNT', response.data.user)
// 				commit('SET_AUTH', response.data.jwt)
// 				Cookie.set('jwt', response.data.jwt)
// 			}
// 		)
// 	},
// 	logout({ commit }) {
// 		const Cookie = process.client ? require('js-cookie') : undefined
// 		Cookie.remove('jwt')
// 		commit('SET_ACCOUNT', {})
// 		commit('SET_AUTH', null)
// 	}
// }
