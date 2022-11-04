import axios from 'axios'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url

  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

export const request = (data,widgetStore) => {
  const service = axios.create()

  let store=widgetStore()
  let publicHeader=store.formConfig.requestHeader
  if(!data.headers){
    data.headers={}
  }
  for(let key in publicHeader){
    data.headers[key]=publicHeader[key]
  }

  if(data.url.indexOf("http")!=0){
    let publicApiHost=store.formConfig.apiHost.value
    data.url=publicApiHost+data.url
  }

  return service(data)
}
