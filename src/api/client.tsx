import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:2000',
    timeout: 120000
  })

export const clientTokopedia = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 120000
}) 

export default client
