import request from '@/utils/request'

export function saveUserInfo(data) {
  return request({
    url: '/v1/user/create',
    method: 'post',
    data
  })
}

