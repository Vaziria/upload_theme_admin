import axios from 'axios'

export const BASEURL = "http://localhost:5000"

const client = axios.create({
    baseURL: BASEURL,
    timeout: 120000
  })

export default client
