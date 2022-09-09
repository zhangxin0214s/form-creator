
import { ElMessage } from 'element-plus'
const editLinkageEvent = () => {
  const changeElement = (props,linkageObject) => {
    const EVENTS = props.options.advanced;
    new Function('props','linkageObject',EVENTS?.linkageCode.value)(props,linkageObject)
    
  }
  return {
    changeElement,
  }
}

export default editLinkageEvent