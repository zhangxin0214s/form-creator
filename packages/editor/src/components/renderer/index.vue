<template>
    <div class="form">
        <el-form 
            class="form-renderer"
            :label-width="formConfig['label-width'].value"
            :label-position="formConfig['label-position'].value"
            ref="ruleFormRef"
            :model="formConfig.ruleForm"
            >
            <template v-for="(widget, index) in widgetList" :key="index">
                <component
                    :is="widget.type"
                    :key1="widget.id"
                    :widget=widget
                    :parent-widget="widgetList"
                    :widget-type="`widget`"
                    :prop-key="widget.ruleFormKey"
                    :rule-form="formConfig.ruleForm"
                    :rule-form-key-type="widget.ruleFormKeyType"
                    :rule-form-ref="ruleFormRef"
                    @submitForm="submitForm">
                </component>
            </template>
        </el-form>
    </div>
</template>
<script setup>
    import { ref } from 'vue'

    const props = defineProps(['widgetList', 'formConfig']);
    const ruleFormRef = ref(null);
    const submitForm = async () =>{
        if (!ruleFormRef) return
        await ruleFormRef.value.validate((valid, fields) => {
            console.log(valid,"===valid===")
            if (valid) {
            console.log('submit!')
            } else {
            console.log('error submit!', fields)
            }
        })
    }
</script>
<style lang="scss" scoped>
    .form{
       &-renderer{
         height:100%;
       } 
    }
</style>