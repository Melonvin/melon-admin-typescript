import axios from 'axios'

/**
 * @description 创建请求实例
 */
function createService () {
  // 创建 axios 实例
  const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 5000
  })

  // 拦截请求
  service.interceptors.request.use(
    config => {
      console.log(config)
    },
    error => {
      console.log(error)
    }
  )

  // 拦截响应
  service.interceptors.response.use(
    response => {
      console.log(response)
    },
    error => {
      console.log(error)
    }
  )
  return service
}

const service = createService()

export default service
