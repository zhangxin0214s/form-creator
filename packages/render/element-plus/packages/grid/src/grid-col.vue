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
    import { inject } from 'vue';
    const props = defineProps([
        'colWidget',
        'isEditor'
    ])    
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