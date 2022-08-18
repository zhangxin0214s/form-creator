<template>
    <!-- 工具栏 -->
    <ul class="tool">
        <li class="tool-btn" @click="clear">
            <svg-icon :icon-class="tools[0].icon" />
            <el-button link type="primary">{{ tools[0].name }}</el-button>
        </li>
        <li class="tool-btn" @click="preview">
            <svg-icon :icon-class="tools[1].icon" />
            <el-button link type="primary">{{ tools[1].name }}</el-button>
        </li>
        <li class="tool-btn" @click="exportCode">
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

    <!-- 预览面板 -->
    <el-dialog v-model="dialogFormVisible" title="表单预览" @close="closePreview">
        <form-renderer
            :widgetList="_widgetList"
            :formConfig="_formConfig"
        ></form-renderer>
    </el-dialog>

    <!-- 代码编辑器面板 -->
    <el-dialog  v-model="dialogCodeVisible" title="代码编辑器">
        <el-tabs v-model="activeName" class="code-editor-tabs" @tab-click="handleClick">
            <el-tab-pane label="JSON" name="first">
                <code-editor
                    :formConfig = _formConfig
                ></code-editor>
            </el-tab-pane>
            <el-tab-pane label="vue" name="second">vue</el-tab-pane>
        </el-tabs>

        
    </el-dialog>
</template>
<script setup>
    import { ref } from 'vue';
    import { widgetStore } from '@/store/index';
    import formRenderer from '../../renderer/index.vue'
    import { ElMessage } from 'element-plus'
    import { deepClone } from '@/utils/util'
    import { toRaw } from '@vue/reactivity'
    import codeEditor from '../code-editor'

    const _widgetStore = widgetStore();
    const dialogFormVisible = ref(false);
    const dialogCodeVisible = ref(false);
    const _widgetList = ref(deepClone(toRaw(_widgetStore.widgetList)));
    const _formConfig = ref(deepClone(toRaw(_widgetStore.formConfig)));
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

    /**
     * 预览
     */
    const preview = () =>{
        dialogFormVisible.value = true;
        _widgetStore.isEditor = false;
        _widgetList.value = deepClone(toRaw(_widgetStore.widgetList));
        _formConfig.value = deepClone(toRaw(_widgetStore.formConfig));
    }

    /**
     * 关闭预览
     */
    const closePreview = () =>{
        _widgetStore.isEditor = true;
    }

    /**
     * 代码编辑器
     */
    const exportCode = () =>{
        dialogCodeVisible.value = true;
    }

    const activeName = ref('first')

    const handleClick = () => {
        console.log()
    }
</script>
<style lang="scss">
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

    .code-editor-tabs>.el-tabs__content {
        color: #6b778c;
        font-size: 32px;
        font-weight: 600;
    }
    .el-dialog{
        width:1200px;
    }
    
    .code-editor{
        &-tabs{
            margin-top:-40px;
        }
    }
    .el-dialog__body{
        padding:0px 20px 20px 20px;
    }
</style>