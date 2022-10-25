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
            isEditor: Boolean
        },
    };
</script>
<style>

</style>