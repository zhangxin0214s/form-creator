import { defineEmits } from 'vue';
const useRegisterEvent = () =>{
    
    /**
     * 点击事件
     * @param {*} widget 
     * @returns 
     */
    const handleOnClick = () =>{
        console.log(defineEmits,"===this===")
        const emit = defineEmits(['submitForm'])
        emit('submitForm')
        // const EVENTS = widget.options.events;
        // if(!EVENTS?.onClick) return;
        // let onClickFunc = new Function(EVENTS?.onClick.value)
        // onClickFunc.call(vue)
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