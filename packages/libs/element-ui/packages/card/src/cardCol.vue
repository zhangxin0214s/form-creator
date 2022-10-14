<template>
    <el-col class="grid-content1 ep-bg-purple">
        <slot></slot>
    </el-col>
</template>
<script>
export default{
    name: 'CardCol'
}
</script>
<style scoped>
    .grid-content1{
        min-height:34px;
    }
 </style>