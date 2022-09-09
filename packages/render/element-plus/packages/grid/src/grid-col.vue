<template>
    <el-col 
        :span="colWidget.gutter" 
        class="grid-content1 ep-bg-purple" 
        :class="[isEditor?'gird-line':'']"
        >
            <draggable :list="colWidget.widgetList" item-key="id" v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300}"
                tag="transition-group" :component-data="{name: 'fade'}"
                @add="onEnd1">
                <template #item="{ element,index }">
                    <div class="transition-group-el">
                        <component
                            :is= "element.type" 
                            :key= "element.id"
                            :widget = element
                            :prop-key = "getPropKey(element,index)"
                            :parent-widget= colWidget.widgetList
                            :rule-form-ref= "ruleFormRef"
                            :rule-form= "ruleForm"
                            :parent = "widget"
                            :selected-widget="selectedWidget"
                            :is-editor="isEditor"
                            :hidden="!isEditor && widget.options.basic.isHidden.value"
                            @click.stop="selected1(element)">
                        </component>
                    </div>
                </template>
            </draggable>
            
    </el-col>
</template>
<script setup>
    import { inject } from 'vue';
    const props = defineProps([
        'colWidget',
        'widget',
        'propKey',
        'ruleForm',
        'ruleFormRef',
        'selectedWidget',
        'isEditor'
    ])    

    const selected = inject('selected')
    const selected1 = (element) =>{
        selected(element)
    }

    const onEnd = inject('onEnd')
    const onEnd1 = (element) =>{
        onEnd(element)
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
        border-radius: 4px;
        min-height: 36px;
    }
    .gird-line{
        border:1px dashed #000;
    }
 </style>