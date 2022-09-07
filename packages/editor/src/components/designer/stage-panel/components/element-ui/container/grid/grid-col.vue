<template>
    <el-col 
        :span="colWidget.gutter" 
        class="grid-content1 ep-bg-purple" 
        :class="[isEditor?'gird-line':'']"
        >
            <draggable :list="colWidget.widgetList" item-key="id" v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300}"
                tag="transition-group" :component-data="{name: 'fade'}"
                @end="onEnd"
                :sort="isEditor">
                <template #item="{ element,index }">
                    <div class="transition-group-el">
                        <component
                            :is= "componentMap[element.type]" 
                            :key= "element.id"
                            :widget = element
                            :prop-key = "getPropKey(element,index)"
                            :parent-widget= colWidget.widgetList
                            :rule-form-ref= "ruleFormRef"
                            :rule-form= "ruleForm"
                            :parent = "widget"
                            @submitForm= "submitForm">
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
        'widget',
        'propKey',
        'ruleForm',
        'ruleFormRef',
        'selectedWidget',
        'isEditor'
    ])
    const componentMap = {
        ...eleComponents
    }

    const onEnd = () =>{
        console.log("结束")
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