<template>
    <el-col class="grid-content1 ep-bg-purple">
        <draggable :list="widgetList" item-key="id" v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300}"
            tag="transition-group" 
            :component-data="{name: 'fade'}"
            @add="onEnd1">
            <template #item="{ element,index }">
                <div class="transition-group-el" @click="selected(widget)">
                    <component 
                        :is="element.type" 
                        :key="element.id"
                        :widget = "element"
                        :parent-widget= "widgetList"
                        :parent="widget"
                        :rule-form= "ruleForm"
                        :prop-key = "getPropKey(element,index)"
                        :selected-widget="selectedWidget"
                        :is-editor="isEditor"
                        @click.stop="selected1(element)">
                    </component>
                </div>
            </template>
        </draggable>
    </el-col>
</template>
<script setup>
    import { inject } from 'vue'
    const props = defineProps([
        'widgetList',
        'widget',
        'propKey',
        'ruleForm',
        'selectedWidget',
        'isEditor'
    ])

    const onEnd = inject("onEnd")
    const onEnd1 = () =>{
        onEnd()
    }
    
    const selected = inject("selected")
    const selected1 = (element) =>{
        selected(element)
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