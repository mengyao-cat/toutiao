// 封装axios
// 导入axios
import axios from 'axios'
// 使用
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn',
  // timeout: 1000,
  //   请求头
  headers: { 'Content-Type': 'application/json' }
})

// 导出
export default request
