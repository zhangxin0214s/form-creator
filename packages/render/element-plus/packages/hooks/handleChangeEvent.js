/**
 * 处理数据
 * @returns 
 */
const handleChangeEvent = (props,ElMessage,cb) =>{
	cb && cb();
    const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
	if(!ruleFormKey){
		ElMessage({
            message: '请先绑定参数key',
            type: 'error',
            duration:1000
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

export {
    handleChangeEvent
}