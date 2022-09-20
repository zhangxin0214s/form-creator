<template>
    <el-col 
        :span="colWidget.gutter" 
        class="grid-content1 ep-bg-purple gird-line">
        <slot></slot>            
    </el-col>
</template>
<script>
export default {
    name: 'GridCol',
    props: {
        colWidget: Object
    }
} 
</script>
 <style scoped>
    .grid-content1{
        border-radius: 4px;
        min-height: 36px;
    }
    .gird-line{
        border:1px dashed #000;
    }
 </style>