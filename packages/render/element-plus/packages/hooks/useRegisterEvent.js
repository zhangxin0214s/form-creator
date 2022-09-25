import { ElMessage } from 'element-plus'
import * as utils from '../../utils/index.js'
import { widgetStore } from '@/store/index';

// 对外暴露的空间
const fc = {
    ElMessage,
    utils,
    widgetStore
}

const useRegisterEvent = ({props, inject}) =>{
    const EVENTS = props.widget.options.events;

    // 将要往沙盒传递的方法或元素写入对外暴露的空间
    const _fc = {
        ...fc,
        props,
        inject,
        target: props.widget,
        linkTarget: props.widget.options.advanced.linkage
    }

    /**
     * 点击事件
     * @returns 
     */
    const handleOnClick = () => {
        if (!EVENTS?.onClick) return;
        new Function(
            'fc',
            EVENTS?.onClick.value
        )(_fc)
    }

    /**
     * change事件
     * @returns 
     */
     const handleOnChange = () => {
        if (!EVENTS?.onChange) return;
        new Function(
            'fc',
            EVENTS?.onChange.value
        )(_fc)
    }

    /**
     * 创建前
     * @param {*} props 
     * @returns 
     */
     const handleOnBeforeMount = () => {
        if (!EVENTS?.onBeforeMount) return;
        new Function(
            'fc',
            EVENTS?.onBeforeMount.value
        )(_fc)
    }

    /**
     * 页面渲染完成
     * @param {*} props 
     * @returns 
     */
     const handleOnMounted = () => {
        if (!EVENTS?.onMounted) return;
        new Function(
            'fc',
            EVENTS?.onMounted.value
        )(_fc)
    }

    /**
     * 监听联动事件
     */
    const linkageWatchEvent = ({watch}) => {
        watch(
            () => props.widget.value,
            (value) => {
                const EVENTS = props.widget.options.advanced.linkageCode.value;
                new Function(
                  'fc'
                  ,EVENTS
                )(_fc)
            },
            {
              deep: true,
              immediate: true
            }
        )
    }
    return {
        handleOnClick,
        handleOnChange,
        handleOnBeforeMount,
        handleOnMounted,
        linkageWatchEvent
    } 
}

export default useRegisterEvent