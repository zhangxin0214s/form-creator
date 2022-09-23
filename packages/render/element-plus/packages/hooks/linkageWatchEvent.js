import { ElMessage } from 'element-plus'
import * as utils from '../../utils/index.js'
/**
 * watch事件
 * @param {*} props 
 */
const fc = {
  ElMessage,
  utils
}
const linkageWatchEvent = (props, watch, inject) => {
  watch(
    () => props.widget.value,
    (value) => {
        const EVENTS = props.widget.options.advanced.linkageCode.value;
        // 将要往沙盒传递的方法或元素写入对外暴露的空间
        const _fc = {
          ...fc,
          target: props.widget,
          props,
          inject
      }
        new Function(
          'fc'
          ,EVENTS
        )(_fc)
    },
    {
      deep: true,
      immediate: true
    }
  )
}


export {
  linkageWatchEvent
}