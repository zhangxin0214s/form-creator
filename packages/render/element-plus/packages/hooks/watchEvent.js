/**
 * watch事件
 * @param {*} props 
 */
const watchEvent = (props,watch,ElMessage) =>{
    watch(
        () => props.propKey,
        (value) => {
            const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
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
                    props.ruleForm[ruleFormKey] = props.widget.value
                }else if(props.parent?.ruleFormKeyType === 'array'){
                    const isExist = props.ruleForm.some(rule =>Object.keys(rule).indexOf(ruleFormKey)>-1);
                    if(!isExist){
                        props.ruleForm.push({
                            [ruleFormKey]: props.widget.value
                        })
                    }
                }else{
                    props.ruleForm[ruleFormKey] = props.widget.value
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