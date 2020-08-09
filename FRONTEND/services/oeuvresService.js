import { apiClient } from './api/strapi-quentin-portfolio-instance'

export default {
  getOeuvres() {
    return apiClient.get('oeuvres')
  },
  getOeuvreDetail(id) {
    return apiClient.get('oeuvres/' + id)
  }
}
