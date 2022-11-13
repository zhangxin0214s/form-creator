import request from '@/utils/request'

export default function accout(data) {
  return request({
    url: '/v1/yach/account',
    method: 'post',
    data
  })
}

