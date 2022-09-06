<template>
    <el-col class="grid-content1 ep-bg-purple">
        <draggable :list="colWidget.widgetList" item-key="id" v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300}"
            tag="transition-group" :component-data="{name: 'fade'}">
            <template #item="{ element,index }">
                <div class="transition-group-el">
                    <component 
                        :is="componentMap[element.type]" 
                        :key="element.id"
                        :parent-widget=colWidget.widgetList
                        :widget = element
                        :prop-key = "getPropKey(element,index)"
                        :rule-form = ruleForm[index]
                    >
                    </component>
                </div>
            </template>
        </draggable>
    </el-col>
</template>
<script setup>
    import eleComponents from '../../index.js';
    const props = defineProps([
        'colWidget',
        'ruleForm',
        'widget',
        'propKey'
    ])
    const componentMap = {
        ...eleComponents
    }
    const getPropKey = (element,index) =>{
        if(props.propKey) {
            if(props.widget.ruleFormKeyType === 'object'){
                return `${props.propKey}.${element.ruleFormKey}`
            }
            if(props.widget.ruleFormKeyType === 'array'){
                return `${props.propKey}.${index}.${element.ruleFormKey}`
            }
        }else{
            return `${element.ruleFormKey}`
        }
    }
</script>
 <style lang="scss" scoped>
 .grid-content1{
    min-height:34px;
    padding-bottom: 20px;
 }
 </style>