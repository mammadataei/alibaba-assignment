import axios from 'axios'

// In a real-world application, this would be an environment variable
const BASE_URL = '/api'

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
