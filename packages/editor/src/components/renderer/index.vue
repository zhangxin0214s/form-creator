<template>
    <div class="form">
        <el-form 
            class="form-renderer"
            :label-width="formConfig['label-width'].value"
            :label-position="formConfig['label-position'].value"
            :rules="formConfig.rules"
            :model="formConfig.ruleForm"
            >
            <template v-for="(widget, index) in widgetList" :key="index">
                <component
                    :is="componentMap[widget.type]"
                    :key1="widget.id"
                    :widget=widget
                    :parent-widget="widgetList">
                </component>
            </template>
        </el-form>
    </div>
</template>
<script setup>
    import eleComponents from '@/components/designer/stage-panel/components/element-ui';
    const componentMap = {
        ...eleComponents
    };
    defineProps(['widgetList', 'formConfig']);
</script>
<style lang="scss" scoped>
    .form{
       &-renderer{
         height:100%;
       } 
    }
</style>