
/**
 * watch事件
 * @param {*} props 
 */
const linkageWatchEvent = (props, watch, copyWidget) => {
  watch(
    () => props.widget.value,
    (value) => {
      if (props.widget.options.advanced.linkage.targets.length !== 0) {
        const EVENTS = props.widget.options.advanced.linkageCode.value;
        new Function('widget', 'linkageObj', 'copyWidget', 'props',EVENTS)(
          props.widget,
          props.widget.options.advanced.linkage.targets,
          copyWidget,
          props
        )
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