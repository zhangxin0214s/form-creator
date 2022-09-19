import { Message } from "element-ui"
export default {
    watch: {
        'widget.value': {
            // 执行方法
            handler:function() {
                 console.log(this.widget.value)
                if (this.widget.options.advanced.linkage.targets.length !== 0) {
                    const EVENTS = this.widget.options.advanced.linkageCode.value;
                    new Function('widget','linkageObj' ,EVENTS)(this.widget,this.widget.options.advanced.linkage.targets)
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
        }
    }
}