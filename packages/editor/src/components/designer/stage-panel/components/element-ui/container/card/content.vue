<template>
    <el-col class="grid-content1 ep-bg-purple">
        <draggable :list="widgetList" item-key="id" v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300}"
            tag="transition-group" :component-data="{name: 'fade'}">
            <template #item="{ element,index }">
                <div class="transition-group-el" @click="selected(widget)">
                    <component 
                        :is="componentMap[element.type]" 
                        :key="element.id"
                        :widget = "element"
                        :parent-widget= "widgetList"
                        :parent="widget"
                        :rule-form= "ruleForm"
                        :prop-key = "getPropKey(element,index)"
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
        'widgetList',
        'widget',
        'propKey',
        'ruleForm'
    ])
    const componentMap = {
        ...eleComponents
    }
    const getPropKey = (element,index) =>{
        if(props.propKey) {
            if(props.widget.ruleFormKeyType === 'object'){
                return `${props.propKey}.${element.ruleFormKey}`
            }
        }else{
            return `${element.ruleFormKey}`
        }
    }
</script>
 <style lang="scss" scoped>
 .grid-content1{
    min-height:34px;
 }
 </style>