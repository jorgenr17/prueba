import axios from 'axios'
// import store from '@/store'
// import router from '@/router'

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken')

    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  response => {
    // if (response.data.status.status !== 'ok') {
    //   return Promise.reject(new Error(response.data.status.mensaje || 'Error'))
    // } else {
    return response
    // }
  },
  error => {
    if (error.response.status) {
      console.log('no autorizado', error.response)
    }
    return Promise.reject(error)
  }
)

export default instance
