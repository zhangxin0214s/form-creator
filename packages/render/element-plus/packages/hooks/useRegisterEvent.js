
import { ElMessage } from 'element-plus'
import * as utils from '../../utils/index.js'

// 对外暴露的空间
const fc = {
    ElMessage,
    utils
}
const useRegisterEvent = () => {

    /**
     * 点击事件
     * @param {*} widget 
     * @returns 
     */
    const handleOnClick = (props, inject, widgetStore) => {
        const EVENTS = props.widget.options.events;

        // 将要往沙盒传递的方法或元素写入对外暴露的空间
        const _fc = {
            ...fc,
            target: props.widget,
            props,
            widgetStore,
            inject,
            linkage: props.widget.options.advanced.linkage
        }
        if (!EVENTS?.onClick) return;
        new Function(
            'fc',
            EVENTS?.onClick.value
        )(_fc)
    }

    /**
     * 创建前
     * @param {*} props 
     * @returns 
     */
    const handleOnBeforeMount = (props) => {
        const EVENTS = props.widget.options.events;
        if (!EVENTS?.onBeforeMount) return;
        new Function('props',EVENTS?.onBeforeMount.value)
        (props)
    }

    /**
     * 页面渲染完成
     * @param {*} props 
     * @returns 
     */
    const handleOnMounted = (props) => {
        const EVENTS = props.widget.options.events;
        if (!EVENTS?.onMounted) return;
        new Function('props',EVENTS?.onMounted.value)
        (props)
    }

    return {
        handleOnClick,
        handleOnBeforeMount,
        handleOnMounted
    }
}

export default useRegisterEvent