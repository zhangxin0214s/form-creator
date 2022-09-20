<template>
    <component
        :is="widget.type"
        :key="widget.id"
        :widget="widget"
        :parent-widget="widgetList"
        :rule-form-ref="ruleFormRef"
        :prop-key="propKey"
        :rule-form="ruleForm"
        :parent="parent"
        :selected-widget="selectedWidget"
        :is-editor="isEditor">
    </component>
</template>
<script setup>
    const props = defineProps([
        'widget',
        'parent',
        'selectedWidget',
        'formConfig',
        'widgetList',
        'isEditor',
        'ruleForm',
        'propKey',
        'ruleFormRef'
    ]);
</script>
<style lang="scss" scoped>
</style>