import { Message } from "element-ui"
export default {
    props: {
        widget: Object,
        isEditor: Boolean,
        propKey: String,
        ruleForm: Object,
        ruleFormRef: Object
    },
    watch: {
        'propKey': {
            // 执行方法
            handler:function() {
                const ruleFormKey = this.widget.options.basic.ruleFormKey.value;
                let _value = null;
                this.widget.type && this.widget.type === 'fcCellPhone' ? _value = `${this.widget.options.basic.prefix.value}-${this.widget.value}` : _value = this.widget.value;
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
        }
    },
    methods: {
        /**
         * 处理数据
         * @param {*} props 
         */
        handleChangeEvent(props) {
            const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
            if(!ruleFormKey){
                Message({
                    message: '请先绑定参数key',
                    type: 'error',
                    duration: 1000
                })
                return;
            }
            if(props.paren?.ruleFormKeyType === 'object'){
                props.ruleForm[ruleFormKey] = props.widget.value;
            }else if(props.parent?.ruleFormKeyType === 'array'){
                props.ruleForm.map(rule =>{
                    if(Object.keys(rule).indexOf(ruleFormKey)>-1){
                        rule[ruleFormKey] = props.widget.value
                    }
                })
            }else{
                props.ruleForm[ruleFormKey] = props.widget.value;
            }
        },

        /**
         * 对外暴露的空间
         */
        useRegisterEvent() {

        }
    }
}