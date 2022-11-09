import { Message } from "element-ui"
import * as utils from '../../utils/index.js'
export default {
    props: {
        widget: Object,
        isEditor: Boolean,
        propKey: String,
        ruleForm: Object,
        ruleFormRef: Object,
        widgetStore: Object
    },
    
    beforeMount() {
        this.useRegisterEvent().handleOnBeforeMount();
    },

    mounted() {
        this.useRegisterEvent().handleOnMounted();
    },

    watch: {
        propKey: {
            // 执行方法
            handler:function() {
                if(!this.widget) return;
                const ruleFormKey = this.widget?.options.basic.ruleFormKey?.value;
                let _value = null;
                this.widget?.type && this.widget?.type === 'fcCellPhone' ? _value = `${this.widget?.options.basic.prefix.value}-${this.widget.value}` : _value = this.widget.value;
                if(ruleFormKey && this.ruleForm && !this.ruleForm[ruleFormKey]){
                    console.log("监听到数据变化",ruleFormKey)
                    if(this.parent?.ruleFormKeyType === 'object'){
                        this.ruleForm[ruleFormKey] = _value
                    }else if(this.parent?.ruleFormKeyType === 'array'){
                        this.ruleForm.push({
                            [ruleFormKey]: _value
                        })
                    }else{
                        this.ruleForm[ruleFormKey] = _value
                    }
                }
            },
            deep: true, // 深度监听
            immediate: true  // 第一次改变就执行
        },
        'widget.value': {
            // 执行联动对象的方法
            handler:function() {
                const EVENTS = this.widget.options.advanced.linkageCode.value;
                if(!EVENTS) return;
                const _fc = {
                    ElMessage: Message,
                    props: this._props,
                    widgetStore: this.$store,
                    $refs: this.$refs,
                    utils,
                    target: this.widget,
                    linkTarget: this.widget?.options?.advanced?.linkage
                }
                new Function(
                  'fc'
                  ,EVENTS
                )(_fc)
            }
        }
    },

    methods: {

        /**
         * 处理数据
         */
        handleChangeEvent() {
            const ruleFormKey = this.widget.options.basic.ruleFormKey.value;
            if(!ruleFormKey){
                Message({
                    message: '请先绑定参数key',
                    type: 'error',
                    duration: 1000
                })
                return;
            }
            if(this.parent?.ruleFormKeyType === 'object'){
                this.ruleForm[ruleFormKey] = this.widget.value;
            }else if(this.parent?.ruleFormKeyType === 'array'){
                this.ruleForm.map(rule =>{
                    if(Object.keys(rule).indexOf(ruleFormKey)>-1){
                        rule[ruleFormKey] = this.widget.value
                    }
                })
            }else{
                this.ruleForm[ruleFormKey] = this.widget.value;
            }
        },

        /**
         * 对外暴露的空间
         */
        useRegisterEvent() {
            const EVENTS = this?.widget?.options?.events;
            // 将要往沙盒传递的方法或元素写入对外暴露的空间
            const _fc = {
                ElMessage: Message,
                props: this._props,
                widgetStore: this.$store,
                $refs: this.$refs,
                utils,
                target: this.widget,
                linkTarget: this.widget?.options?.advanced?.linkage
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
             * @returns 
             */
            const handleOnBeforeMount = (event) => {
                if (!EVENTS?.onBeforeMount && !event) return;
                new Function(
                    'fc',
                    EVENTS?.onBeforeMount.value || event
                )(_fc)
            }

            /**
             * 页面渲染完成
             * @returns 
             */
            const handleOnMounted = (event) => {
                if (!EVENTS?.onMounted && !event) return;
                new Function(
                    'fc',
                    EVENTS?.onMounted.value || event
                )(_fc)
            }
            return {
                handleOnClick,
                handleOnChange,
                handleOnBeforeMount,
                handleOnMounted
            }
        }
    }
}