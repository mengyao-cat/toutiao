// 用户请求模块
import request from '@/utils/request.js'
// 登录请求
const login = data => {
  return request(
    {
      methods: 'post',
      url: '/app/v1_0/authorizations',
      data
    }
  )
}

export {
  login
}
