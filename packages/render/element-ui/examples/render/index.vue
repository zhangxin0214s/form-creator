<template>
    <div class="form">
        <el-form 
            class="form-renderer"
            :label-width="formJson.formConfig['label-width'].value"
            :label-position="formJson.formConfig['label-position'].value"
            ref="ruleFormRef"
            :model="formJson.formConfig.ruleForm"
        >
        <template v-for="(widget, index) in formJson.widgetList" :key="index">
            <!-- 非容器组件 -->
            <template v-if="widget.category === 'widget'">
            </template>

            <!-- 容器类组件 -->
            <template v-if="widget.category === 'container'">
            </template>
        </template>
        </el-form>
    </div>
</template>
<script>
    export default {
        name: "FormRender",
        props: {
            msg: String,
        },
    };
</script>
<style lang="scss" scoped>
    
</style>