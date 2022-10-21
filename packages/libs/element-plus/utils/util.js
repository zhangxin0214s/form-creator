/**
 * 根据id查找相应元素
 * @param {*} id 
 * @param {*} widgetList 
 * @returns 
 */
export function getWidgetById(id, widgetList) {
  let stack = [...widgetList];
  let target = null;
  while (stack.length) {
    let node = stack.pop();
    if (node.id === id) {
      target = node;
    }
    if (target !== null) {
      stack = [];
    }
    if (target === null && ['fcGrid', 'fcTabs', 'fcCard'].indexOf(node.type) > -1) {
      node.options.advanced.cols.forEach((c) => {
        stack.push(...c.widgetList);
      });
    }
  }
  return target;
}

/**
 * 根据参数key查找相应元素
 * @param {*} key 
 * @param {*} widgetList 
 * @returns 
 */
export function getWidgetsByKey(key, widgetList) {
  let stack = [...widgetList];
  let target = [];
  while (stack.length) {
    let node = stack.pop();
    if (node.id === id) {
      target.push(node);
    }
    if (target !== null) {
      stack = [];
    }
    if (target === null && ['fcGrid', 'fcTabs', 'fcCard'].indexOf(node.type) > -1) {
      node.options.advanced.cols.forEach((c) => {
        stack.push(...c.widgetList);
      });
    }
  }
  return target;
}

/**
 * 根据customAttrName查找相应元素
 * @param {*} attr  customAttrName
 * @param {*} stage 
 * @returns 
 */
export function getElementsByAttr(attr, stage) {
  let stack = [stage];
  let target = [];
  while (stack.length) {
    let node = stack.pop();
    if (node.customAttrName === attr) {
      target.push(node);
    }
    stack.push(...(node.children || []))
  }
  return target;
}