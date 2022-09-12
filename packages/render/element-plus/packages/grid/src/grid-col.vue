<template>
    <el-col 
        :span="colWidget.gutter" 
        class="grid-content1 ep-bg-purple" 
        :class="[isEditor?'gird-line':'']"
        >
        <slot></slot>            
    </el-col>
</template>
<script setup>
    import { inject,ref } from 'vue';
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