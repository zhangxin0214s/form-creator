
const submitForm = async (formEl) => {
    if(!formEl) return
    await formEl.validate(((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    }))
}
submitForm(ref('ruleFormRef'))