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
        :widget-store="widgetStore"
        :request="request"
        :selected-widget="selectedWidget"
        :is-editor="isEditor">

        <template v-slot:widgetChild="scope">
            <div v-for="(element, index) in scope.colWidget.widgetList" :key="index">
                <div v-if="element.category === 'widget'">
                    <widget-mask
                        :widget="element"
                        :widget-list="scope.colWidget.widgetList"
                        :selected-widget="selectedWidget"
                        :is-editor="isEditor"
                        :rule-form-ref="ruleFormRef"
                        :form-config="formConfig"
                        :widget-store="widgetStore"
                        :request="request"
                        :parent="widget"
                        :prop-key="getPropKey({parent: widget,element, propKey: scope.propKey, index: scope.index})"
                        :rule-form="scope.ruleForm"
                    />
                </div>

                <div v-if="element.category === 'container'">
                    <container-mask
                        :widget="element"
                        :widgetList="scope.colWidget.widgetList"
                        :selectedWidget="selectedWidget"
                        :isEditor="isEditor"
                        :rule-form-ref="ruleFormRef"
                        :formConfig="formConfig"
                        :widget-store="widgetStore"
                        :request="request"
                        :parent="widget"
                        :prop-key="getPropKey({parent: widget,element, propKey: scope.propKey, index: scope.index})"
                        :rule-form="scope.ruleForm"
                    />
                </div>
            </div>
        </template>
    </component>
</template>
<script>
    import WidgetMask from './widgetMask.vue'
    export default {
        name: "ContainerMask",
        props: {
            widget: Object,
            selectedWidget: Object,
            formConfig: Object,
            widgetList: Array,
            isEditor: Boolean,
            propKey: String,
            ruleForm: Object,
            parent: Object,
            ruleFormRef: Object,
            widgetStore: Object,
            request: Object
        },
        components: {
            WidgetMask
        },
        methods: {
            getPropKey({parent,element,propKey,index}) {
                if(propKey) {
                    if(parent.ruleFormKeyType === 'object'){
                        return `${propKey}.${element.ruleFormKey}`
                    }
                    if(parent.ruleFormKeyType === 'array'){
                        return `${propKey}.${index}.${element.ruleFormKey}`
                    }
                }else{
                    return `${element.ruleFormKey}`
                }
            }
        }
    };
</script>
<style>

</style>