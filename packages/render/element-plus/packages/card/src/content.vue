<template>
    <el-col class="grid-content1 ep-bg-purple">
        <slot></slot>
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