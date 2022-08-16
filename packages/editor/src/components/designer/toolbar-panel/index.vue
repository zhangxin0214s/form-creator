<template>
    <ul class="tool">
        <li class="tool-btn" @click="clear">
            <svg-icon :icon-class="tools[0].icon" />
            <el-button link type="primary">{{ tools[0].name }}</el-button>
        </li>
        <li class="tool-btn">
            <svg-icon :icon-class="tools[1].icon" />
            <el-button link type="primary">{{ tools[1].name }}</el-button>
        </li>
        <li class="tool-btn">
            <svg-icon :icon-class="tools[2].icon" />
            <el-button link type="primary">{{ tools[2].name }}</el-button>
        </li>
        <li class="tool-btn">
            <svg-icon :icon-class="tools[3].icon" />
            <el-button link type="primary">{{ tools[3].name }}</el-button>
        </li>
        <li class="tool-btn">
            <svg-icon :icon-class="tools[4].icon" />
            <el-button link type="primary">{{ tools[4].name }}</el-button>
        </li>
    </ul>
</template>
<script setup>
    import { ref } from 'vue';
    import { storeToRefs } from 'pinia';
    import { widgetStore } from '@/store/index';
    import { ElMessage } from 'element-plus'
    const _widgetStore = widgetStore();
    const tools = ref([
        {
            name:'清空',
            icon:'tool-clear'
        },
        {
            name:'预览',
            icon:'tool-preview'
        },
        {
            name:'导出',
            icon:'tool-export'
        },
        {
            name:'导入',
            icon:'tool-import'
        },
        {
            name:'商城',
            icon:'tool-mall'
        }
    ])

    /**
     * 清空
     */
    const clear = () =>{
        ElMessage({
            message: '清除成功',
            type: 'success',
            duration:1000
        })
        _widgetStore.clearWidget();
    }
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