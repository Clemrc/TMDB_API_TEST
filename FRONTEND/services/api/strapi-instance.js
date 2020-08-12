import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:1337',
  withCredentials: false,
  headers: {
    'Content-type': 'alication/json'
  }
})

export { apiClient }
