import axios from 'axios'

export const request = (data) => {
  const service = axios.create()
  return service(data)
}
