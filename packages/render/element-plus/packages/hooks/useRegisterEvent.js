
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
            (   props,
                inject,
                ElMessage,
                props.widget.options.advanced.linkage.targets,
                copy
            )
    }

    /**
     * 创建前
     * @param {*} widget 
     * @returns 
     */
    const handleOnBeforeMount = (widget) => {
        const EVENTS = widget.options.events;
        if (!EVENTS?.onBeforeMount) return;
        let onBeforeMountFunc = new Function(EVENTS?.onBeforeMount.value)
        onBeforeMountFunc.call(widget)
    }

    /**
     * 页面渲染完成
     * @param {*} widget 
     * @returns 
     */
    const handleOnMounted = (widget) => {
        const EVENTS = widget.options.events;
        if (!EVENTS?.onMounted) return;
        let onMountedFunc = new Function(EVENTS?.onMounted.value)
        onMountedFunc.call(widget)
    }

    return {
        handleOnClick,
        handleOnBeforeMount,
        handleOnMounted
    }
}

export default useRegisterEvent