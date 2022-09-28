// import { widgetStore } from '@/store/index';

// const _widgetStore = widgetStore();
/**
 * 根据id查找相应元素
 * @param {*} id 
 * @param {*} widgetList 
 * @returns 
 */
export function getWidgetById(id, widgetList) {
  let target = widgetList.find(w=>w.id === id);
  if (!target) {
    for (let i = 0; i < widgetList.length; i++) {
      if (['fcGrid', 'fcTabs', 'fcCard'].indexOf(widgetList[i].type) > -1) {
        const cols = widgetList[i].options.advanced.cols;
        for (let k = 0; k < cols.length; k++) {
          let w = getWidgetById(id, cols[k].widgetList);
          if(w) return w;
        }
      }
    }
  }
  return target
  // let target = null;
  // widgetList.forEach(widget => {
  //   if (widget.id === id) {
  //     target = widget
  //   } else {
  //     if (['fcGrid', 'fcTabs', 'fcCard'].indexOf(widget.type) > -1) {
  //       const cols = widget.options.advanced.cols
  //       cols.forEach(col => {
  //         if (!target) getWidgetById(id, col.widgetList)
  //       })
  //     }
  //   }
  // })
  // return target
}

/**
 * 根据参数key查找相应元素
 * @param {*} key 
 * @param {*} widgetList 
 * @returns 
 */
export function getWidgetByKey(key, widgetList, targets = []) {
  widgetList.forEach(widget => {
    if (widget.ruleFormKey === key) {
      targets.push(widget)
    } else {
      if (['fcGrid', 'fcTabs', 'fcCard'].indexOf(widget.type) > -1) {
        const cols = widget.options.advanced.cols
        cols.forEach(col => {
          getWidgetById(key, col.widgetList, targets)
        })
      }
    }
  })
  console.log(targets, "===查找到的元素===")
  return targets
}