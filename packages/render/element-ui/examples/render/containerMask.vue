<template>
    <component
        :is="widget.type"
        :key="widget.id"
        :widget="widget"
        :parent-widget="widgetList"
        :prop-key="propKey"
        :parent="parent"
        :rule-form-ref="ruleFormRef"
        :rule-form="ruleForm"
        :selected-widget="selectedWidget"
        :is-editor="isEditor">

        <template v-slot:widgetChild="scope">
            <template v-for="(element, index) in scope.colWidget.widgetList" :key="index">
                <template v-if="element.category === 'widget'">
                </template>

                <template v-if="element.category === 'container'">
                </template>
            </template>
        </template>
    </component>
</template>
<script>
    import WidgetMask from './widgetMask.vue'
    export default {
        name: "ContainerMask",
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
        components:{
            WidgetMask
        }
    };
</script>
<style>

</style>