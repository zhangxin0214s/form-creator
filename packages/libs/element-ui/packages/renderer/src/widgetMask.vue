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
<script>
    export default {
        name: "WidgetMask",
        props: {
            widget: Object,
            parent: Object,
            selectedWidget: Object,
            formConfig: Object,
            widgetList: Array,
            isEditor: Boolean,
            ruleForm: Object,
            propKey: String,
            ruleFormRef: Object
        },
    };
</script>
<style>

</style>