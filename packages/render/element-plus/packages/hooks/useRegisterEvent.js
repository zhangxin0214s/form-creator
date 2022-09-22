
import { ElMessage } from 'element-plus'
const useRegisterEvent = () => {

    /**
     * 点击事件
     * @param {*} widget 
     * @returns 
     */
    const handleOnClick = (props, inject, copy) => {
        const EVENTS = props.widget.options.events;
        if (!EVENTS?.onClick) return;
        new Function(
            'props',
            'inject',
            'ElMessage',
            'linkageObj',
            'copyWidget',
            EVENTS?.onClick.value)
            (props,
                inject,
                ElMessage,
                props.widget.options.advanced.linkage.targets,
                copy
            )
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