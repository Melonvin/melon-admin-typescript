import request from '@/utils/request'

export function login (params: any) {
  return request({
    url: '/melon-admin/user/login',
    method: 'post',
    params
  })
}
