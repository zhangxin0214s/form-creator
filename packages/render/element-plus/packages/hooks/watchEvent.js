/**
 * watch事件
 * @param {*} props 
 */
const watchEvent = (props,watch,ElMessage,type) =>{
    watch(
        () => props.propKey,
        (value) => {
            const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
            let _value = null;
            type && type === 'cellPhone' ? _value = `${props.widget.options.basic.prefix.value}-${props.widget.value}` : _value = props.widget.value
            if(!props.ruleForm){
                if(ElMessage){
                    ElMessage({
                        message: '请先给父级容器绑定参数key',
                        type: 'error',
                        duration:1500
                    })
                }
                return
            }
            if(ruleFormKey && !props.ruleForm[ruleFormKey]){
                console.log("监听到数据变化",ruleFormKey)
                if(props.parent?.ruleFormKeyType === 'object'){
                    props.ruleForm[ruleFormKey] = _value
                }else if(props.parent?.ruleFormKeyType === 'array'){
                    // const isExist = props.ruleForm.some(rule =>Object.keys(rule).indexOf(ruleFormKey)>-1);
                    // if(!isExist){
                        props.ruleForm.push({
                            [ruleFormKey]: _value
                        })
                    // }
                }else{
                    props.ruleForm[ruleFormKey] = _value
                }
            }
        },
        {
            deep: true,
            immediate: true
        }
    )
}

export {
    watchEvent
}