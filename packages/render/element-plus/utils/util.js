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
    console.log(target,"===查找到的元素===")
    return target
  }