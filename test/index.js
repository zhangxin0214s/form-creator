const _widgetStore = fc.widgetStore();
let user_name = fc.utils.getWidgetsByKey('name', _widgetStore.widgetList)[0];
let user_email = fc.utils.getWidgetsByKey('email', _widgetStore.widgetList)[0]; 

fc.request['user/account']({
    methodType: 1,
    workcode: fc.target.value
}).then(res =>{
    if(res.code === 200){
        user_name.value = res.data.name;
        user_email = res.data.email;
    }
})


if (!fc.props.ruleFormRef) return
fc.props.ruleFormRef.validate((valid, fields) = >{
    if (valid) { 
        console.log('submit!') 
        console.log(fc.props.ruleForm, \"===ruleForm===\")    
        fc.request['user/saveUserInfo'](fc.props.ruleForm).then(res =>{      
            if(res.code === 200){        
                fc.ElMessage({
                    message: '保存成功',          
                    type: 'success',          
                    duration: 1000        
                })      
            }else{        
                fc.ElMessage({          
                    message: res.msg,          
                    type: 'error',          
                    duration: 1000        
                })      
            }    
        })  
    } else {   
         console.log('error submit!', fields)    
         fc.ElMessage({      
            message: '有必填项未填写，或填写错误，请检查',      
            type: 'error',      duration: 1000    
        })  
    }})