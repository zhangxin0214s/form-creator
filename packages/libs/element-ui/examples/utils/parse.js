/**
 * 获取各种参数
 * @param {String} name
 * @param {String} url
 */

export const getParameter = (name, url) => {
    if (!url) url = window.location.href
    name = name.replace(/[\[\]]/g, '\\$&')
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
    const results = regex.exec(url)
    if (!results) return undefined
    if (!results[2]) return undefined
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
  