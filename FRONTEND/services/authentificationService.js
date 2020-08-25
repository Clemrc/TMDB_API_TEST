import { apiClient } from './api/strapi-instance'

export default {
	postLogin(mail, password) {
		return apiClient.post('auth/local/', {
			identifier: mail,
			password
		})
	}
}
