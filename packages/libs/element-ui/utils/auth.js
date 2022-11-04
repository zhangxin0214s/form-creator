// import Cookies from 'js-cookie'
import Storages from 'js-storage'
export function getToken(TokenKey) {
  return Storages.sessionStorage.get(TokenKey)
}

export function setToken(TokenKey, token) {
  return Storages.sessionStorage.set(TokenKey, token)
}

export function removeToken(TokenKey) {
  return Storages.sessionStorage.remove(TokenKey)
}
