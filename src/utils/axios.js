import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://revision-aw7l.onrender.com',
  withCredentials: true
})

export default instance