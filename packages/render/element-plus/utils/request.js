import axios from 'axios'
import { widgetStore } from '@/store/index';

export const request = (data) => {
  const service = axios.create()

  let store=widgetStore()
  let publicHeader=store.formConfig.requestHeader
  if(!data.headers){
    data.headers={}
  }
  for(let key in publicHeader){
    data.headers[key]=publicHeader[key]
  }

  return service(data)
}
