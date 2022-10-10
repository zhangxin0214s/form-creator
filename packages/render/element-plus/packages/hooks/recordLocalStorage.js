/**
 * getLocalValue 获取本地存储的value
 * @param {string} key 本地存储的key值
 * @return {object|null} 当前key不存在即为null
 */
const getLocalValue = (key) => {
  return JSON.parse(localStorage.getItem(key));
}
/**
 * setLocalValue 保存本地存储的value
 * @param {string} key 本地存储的key值
 * @param {object} data 需要存储的value值
 */
const setLocalValue = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

/**
 * keepFormDataLocal 保存整个formData的数据
 * @param {*} watch 监听器
 * @param {object} formConfig 监听对象
 * @param {object} widgetList 监听对象
 */
const keepFormDataLocal = (watch, formConfig, widgetList) => {
  watch([formConfig, widgetList], () => {
    setLocalValue('formConfig_history',formConfig);
    setLocalValue('widgetList_history',widgetList);
  });
}
export {
  keepFormDataLocal,
  getLocalValue,
  setLocalValue
}