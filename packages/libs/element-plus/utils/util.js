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
 export function getWidgetsByKey(ruleFormKey, widgetList) {
  let stack = [...widgetList];
  let target = [];
  while (stack.length) {
    let node = stack.pop();
    if (node.ruleFormKey === ruleFormKey) {
      target.push(node);
    }
    if (target.length !== 0) {
      stack = [];
    }
    if (target.length === 0 && ['fcGrid', 'fcTabs', 'fcCard'].indexOf(node.type) > -1) {
      node.options.advanced.cols.forEach((c) => {
        stack.push(...c.widgetList);
      });
    }
  }
  return target;
}

/**
 * 根据元素id查找父节点
 * @param {*} currentWidget 
 * @param {*} widgetList 
 * @returns 
 */
export function getParentById(currentWidget, widgetList) {
  let stack = [...widgetList];
  let target = null;
  while (stack.length) {
    let node = stack.pop();
    if (['fcGrid', 'fcTabs', 'fcCard'].indexOf(node.type) > -1) {
      node.options.advanced.cols.forEach((c) => {
        stack.push(...c.widgetList);
        c.widgetList.forEach(widget => {
          if(widget.id === currentWidget.id) {
            target = node
          }
        })
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