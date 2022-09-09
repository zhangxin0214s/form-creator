<template>
    <el-col class="grid-content1 ep-bg-purple">
        <draggable :list="widgetList" item-key="id" v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300}"
            tag="transition-group" 
            :component-data="{name: 'fade'}"
            @add="onEnd">
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
                        @copyWidget="copyWidget(element)"
                        @removeWidget="removeWidget(element,widgetList)"
                        @click.stop="selected(element)"                         
                        @submitForm= "submitForm">
                    >
                    </component>
                </div>
            </template>
        </draggable>
    </el-col>
</template>
<script setup>
    const props = defineProps([
        'widgetList',
        'widget',
        'propKey',
        'ruleForm',
        'selectedWidget',
        'isEditor'
    ])

    const emit = defineEmits(['selected','copyWidget','removeWidget','onEnd']);

    const onEnd = () =>{
        emit('onEnd')
    }
    
    const selected = (element) =>{
        emit('selected',element)
    }

    const copyWidget = (element) =>{
        emit('copyWidget',element)
    }

    const removeWidget = (widget, parentWidget) =>{
        emit('removeWidget',widget, parentWidget)
    }
    const submitForm = async () =>{
        if (!props.ruleFormRef) return
        await props.ruleFormRef.validate((valid, fields) => {
            console.log(valid,"===valid===")
            if (valid) {
            console.log('submit!')
            } else {
            console.log('error submit!', fields)
            }
        })
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