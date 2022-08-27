

const useRegisterEvent = () =>{
    
    /**
     * 点击事件
     * @param {*} widget 
     * @returns 
     */
    const handleOnClick = (props,emit) =>{
        const EVENTS = props.widget.options.events;
        if(!EVENTS?.onClick) return;
        new Function(
            'props',
            'emit',
            EVENTS?.onClick.value)
            (props,
            emit)
    }

    /**
     * 创建前
     * @param {*} widget 
     * @returns 
     */
    const handleOnBeforeMount = (widget) =>{
        const EVENTS = widget.options.events;
        if(!EVENTS?.onBeforeMount) return;
        let onBeforeMountFunc = new Function(EVENTS?.onBeforeMount.value)
        onBeforeMountFunc.call(widget)
    }

    /**
     * 页面渲染完成
     * @param {*} widget 
     * @returns 
     */
    const handleOnMounted = (widget) =>{
        const EVENTS = widget.options.events;
        if(!EVENTS?.onMounted) return;
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