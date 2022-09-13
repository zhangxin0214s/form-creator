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
                <!-- 非容器组件 -->
                <template v-if="widget.category === 'widget'">
                  <widget-mask
                    :widget="widget"
                    :widget-list="widgetList"
                    :form-config="formConfig"
                    :prop-key="widget.ruleFormKey"
                    :rule-form="formConfig.ruleForm"
                  />
                </template>

                <!-- 容器类组件 -->
                <template v-if="widget.category === 'container'">
                  <container-mask
                    :widget="widget"
                    :widget-list="widgetList"
                    :form-config="formConfig"
                    :prop-key="widget.ruleFormKey"
                    :rule-form="formConfig.ruleForm"
                  />
                </template>
            </template>
        </el-form>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import widgetMask from './widgetMask.vue'
    import containerMask from './containerMask.vue'
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