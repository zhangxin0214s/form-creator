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
            if(ruleFormKey && props.ruleForm && !props.ruleForm[ruleFormKey]){
                console.log(props.parent?.ruleFormKeyType,"监听到数据变化",ruleFormKey)
                if(props.parent?.ruleFormKeyType === 'object'){
                    props.ruleForm[ruleFormKey] = _value
                    console.log(props.ruleForm,"===props.ruleForm===")
                }else if(props.parent?.ruleFormKeyType === 'array'){
                    // const isExist = props.ruleForm.some(rule =>Object.keys(rule).indexOf(ruleFormKey)>-1);
                    // if(!isExist){
                        props.ruleForm.push({
                            [ruleFormKey]: _value
                        })
                    // }
                }else{
                    debugger
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