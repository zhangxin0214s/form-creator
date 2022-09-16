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
            widgetList: Array,
            ruleFormRef: Object,
            propKey: String,
            ruleForm: Object,
            parent: Object,
            selectedWidget: Object,
            isEditor: Boolean
        },
    };
</script>
<style>

</style>