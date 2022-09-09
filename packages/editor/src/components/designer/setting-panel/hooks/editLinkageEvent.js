
import { ElMessage } from 'element-plus'
const editLinkageEvent = () => {
  const changeElement = (props, linkageObject, copyWidget,parent) => {
    const EVENTS = props.advancedProp.linkageCode.value;
    new Function('props', 'linkageObject', 'copyWidget', 'parent',EVENTS)(props, linkageObject, copyWidget,parent)
  }
  return {
    changeElement,
  }
}

export default editLinkageEvent