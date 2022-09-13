<template>
    <component
        :is="widget.type"
        :key="widget.id"
        :widget="widget"
        :parent-widget="widgetList"
        :prop-key="propKey"
        :parent="parent"
        :rule-form="ruleForm"
        :selected-widget="selectedWidget"
        :is-editor="isEditor"
        @click.stop="select1(widget)">

        <template v-slot:widgetChild="scope">
            <template v-for="(element, index) in scope.colWidget.widgetList" :key="index">
                <template v-if="element.category === 'widget'">
                    <widget-mask
                        :widget="element"
                        :widget-list="scope.colWidget.widgetList"
                        :selected-widget="selectedWidget"
                        :is-editor="isEditor"
                        :form-config="formConfig"
                        :parent="widget"
                        :prop-key="getPropKey({parent: widget,element, propKey: scope.propKey, index: scope.index})"
                        :rule-form="scope.ruleForm"
                    />
                </template>

                <template v-if="element.category === 'container'">
                    <container-mask
                        :widget="element"
                        :widgetList="scope.colWidget.widgetList"
                        :selectedWidget="selectedWidget"
                        :isEditor="isEditor"
                        :formConfig="formConfig"
                        :parent="widget"
                        :prop-key="getPropKey({parent: widget,element, propKey: scope.propKey, index: scope.index})"
                        :rule-form="scope.ruleForm"
                    />
                </template>
            </template>
        </template>
    </component>
</template>
<script setup>
    import { inject } from 'vue'
    import widgetMask from "./widgetMask.vue"
    const props = defineProps([
        'widget',
        'selectedWidget',
        'formConfig',
        'widgetList',
        'isEditor',
        'propKey',
        'ruleForm',
        'parent'
    ]);
    
    const getPropKey = ({parent,element,propKey,index}) =>{
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
</script>
<style lang="scss" scoped>

</style>