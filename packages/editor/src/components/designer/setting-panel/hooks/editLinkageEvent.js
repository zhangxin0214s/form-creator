
import { ElMessage } from 'element-plus'
const editLinkageEvent = () => {
  const changeElement = (props, linkageObject, copyWidget) => {
    const EVENTS = props.options.advanced;
    new Function('props', 'linkageObject', 'copyWidget', EVENTS?.linkageCode.value)(props, linkageObject, copyWidget)

  }
  return {
    changeElement,
  }
}

export default editLinkageEvent