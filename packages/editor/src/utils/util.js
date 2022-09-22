import { v4 as uuidv4 } from 'uuid';
import { ElMessage } from 'element-plus';
import { toRaw } from '@vue/reactivity'

/**
 * 生成唯一ID
 */
export function generateId(){
    return uuidv4().replaceAll('-','')
}

/**
 * 对象深克隆
 * @param {*} obj
 * @returns
 */
export function deepClone(obj){
    let result;
    if(typeof obj === 'object') {
        if(Array.isArray(obj)) {
        result = [];
        for(let i in obj) {
            result.push(deepClone(obj[i]))
        }
        } else if (obj === null){
        result = null
        } else if (obj.constructor === RegExp){
        result = obj
        } else {
        result = {};
        for(let i in obj) {
            result[i] = deepClone(obj[i])
        }
        }
    } else {
        result = obj;
    }
    return result;

}

function judgeSameKey (lists, keyArray=[]) {
  // 同级key不可相同
  let same = false;
  lists.some(list => {
    const key = list.options.basic.ruleFormKey.value;
    if (keyArray.indexOf(key) > -1) {
      same = list;
      return true;
    } else {
      keyArray.push(key);
    }
  })
  return same;
}

function judgeEmptyKey (lists) {
  let emptyTarget;
  lists.some((list,index) => {
    const key = list.options.basic.ruleFormKey.value;
    if (key.trim() === "") {
      // key为空
      emptyTarget = list;
      return true;
    }
  })
  return emptyTarget;
}

function linkAgeDeep (lists, linkAge) {
  let emptyTarget = judgeEmptyKey(lists.value || lists),
      same = judgeSameKey(lists.value || lists),
      target;
  if (emptyTarget) {
    target = emptyTarget;
    ElMessage({
      showClose: true,
      message: '该组件参数key为空',
      center: true,
    })
  } else if (same) {
    target = same;
    ElMessage({
      showClose: true,
      message: `参数${target.options.basic.ruleFormKey.value}有多个`,
      center: true,
    })
  } else {
    let array = lists.value || lists;
    array.forEach(list => {
      const {category} = list;
      const key = list.options.basic.ruleFormKey.value;
      if (category === 'container') {
        linkAge[key] = {};
        list.options.advanced.cols.forEach(list => {
          if (list.ruleFormKey) {
            // 针对标签页面
            linkAge[key][list.ruleFormKey.value] = {};
          }
          if (list.widgetList.length>0) {
            linkAgeDeep(list.widgetList, list.ruleFormKey?linkAge[key][list.ruleFormKey.value]:linkAge[key]);
          } else {
            // 空容器列表
          }
        })
      } else {
        linkAge[key] = list.value;
      }
    })
  }
  return target;
}

export function handleData (widgetList, linkAge) {
  return linkAgeDeep(widgetList, linkAge);
}

// 根据id查找widget
export function getWidgetById(id,widgetList){
  let target = null;
  widgetList.forEach(widget =>{
    if(widget.id === id){
      target = widget
    }else {
      if(['fcGrid','fcTabs','fcCard'].indexOf(widget.type) > -1) {
        const cols = widget.options.advanced.cols
        cols.forEach(col =>{
          getWidgetById(id,col.widgetList)
        })
      }
    }
  })
  return target
}
