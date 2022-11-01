import axios from 'axios'

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
