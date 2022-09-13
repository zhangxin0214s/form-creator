<template>
    <el-col class="grid-content1 ep-bg-purple">
        <slot></slot>
    </el-col>
</template>
<script setup>
    import { inject } from 'vue'
    const props = defineProps([
        'colWidget',
        'ruleForm',
        'widget',
        'propKey',
        'colIdx',
        'isEditor',
        'selectedWidget'
    ])
    const getPropKey = (element,index) =>{
        if(props.propKey) {
            return `${props.propKey}.${index}.${element.ruleFormKey}`
        }else{
            return `${element.ruleFormKey}`
        }
    }

    const onEnd = inject('onEnd')
    const onEnd1 = () =>{
        onEnd()
    }
    
    const selected = inject('selected')
    const selected1 = (element) =>{
        selected(element)
    }

</script>
 <style lang="scss" scoped>
 .grid-content1{
    min-height:34px;
    padding-bottom: 20px;
 }
 </style>