import { ElMessage } from 'element-plus'
/**
 * watch事件
 * @param {*} props 
 */
const linkageWatchEvent = (props, watch, ElMessage, type) => {
  watch(
    () => props.widget.value,
    (value) => {
      if (props.widget.options.advanced.linkage.targets.length !== 0) {
        const EVENTS = props.widget.options.advanced.linkageCode.value;
        new Function('widget','linkageObj' ,EVENTS)(props.widget,props.widget.options.advanced.linkage.targets)
      }
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