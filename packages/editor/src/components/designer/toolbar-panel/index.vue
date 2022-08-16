<template>
    <ul class="tool">
        <li class="tool-btn" v-for="(tool,index) in tools" :key="index">
            <svg-icon :icon-class="tool.icon" />
            <el-button link type="primary">{{ tool.name }}</el-button>
        </li>
    </ul>
</template>
<script setup>
    import { ref } from 'vue';
    const tools = ref([
        {
            name:'清空',
            icon:'tool-clear'
        },
        {
            name:'预览',
            icon:'tool-preview'
        }
    ])
</script>
<style lang="scss" scoped>
    li{
        list-style-type: none;
    }
    .tool {
        display: -webkit-flex;
        display: flex;
        justify-content:center;
        &-btn{
           margin-right:15px;
        }
    }
</style>