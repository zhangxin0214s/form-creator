<template>
    <ul class="toolbar">

        <!-- 字号 -->
        <li class="toolbar-btn">
            <el-dropdown @command="handleFontCommand">
                <span class="el-dropdown-link">
                    <svg-icon class="toolbar-icon" :icon-class="tools[0].icon" />
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item :command="font" v-for="(font,index) in tools[0].options" :key="index">{{ font }}</el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>
        </li>

        <!-- 语言 -->
        <!-- <li class="toolbar-btn">
            <el-dropdown @command="handleLanCommand">
                <span class="el-dropdown-link">
                    <svg-icon class="toolbar-icon" :icon-class="tools[1].icon" />
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item :command="language" v-for="(language,index) in tools[1].options" :key="index">{{ language }}</el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>
        </li> -->

        <li class="toolbar-btn1" @click="prettify">
            <svg-icon class="toolbar-icon1" :icon-class="tools[2].icon" />
        </li>

        <li class="toolbar-btn1" @click="handleCopyCommand">
            <svg-icon class="toolbar-icon1" :icon-class="tools[3].icon" />
        </li>

        <li class="toolbar-btn1" @click="downloadCode">
            <svg-icon class="toolbar-icon1" :icon-class="tools[4].icon" />
        </li>

    </ul>
</template>
<script setup>
    import { ref  } from 'vue';
    import { defineProps,defineEmits } from 'vue';
    const props = defineProps(['monacoEditor']);

    const tools = ref([
        {
            name:'字号',
            icon:'font-size',
            options:[
                12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36
            ]
        },{
            name:'语言',
            icon:'language',
            options:[
                'javascript',
                'html',
                'css',
                'less',
                'json',
                'typescript',
                'markdown'
            ]
        },{
            name:'格式化',
            icon:'prettify'
        },{
            name:'复制',
            icon:'tool-copy'
        },{
            name:'下载',
            icon:'tool-download'
        }
    ])  

    const emit = defineEmits(['changeFont','prettifyCode','copyCode']);

    /**
     * 修改字号
     */
    const handleFontCommand = (command) =>{
        emit('changeFont',command)
    }

    /**
     * 格式化代码
     */
    const prettify = () =>{
        console.log("美化")
        emit('prettifyCode')
    }

    /**
     * 复制代码
     */
    const handleCopyCommand = (e) =>{
        emit('copyCode',e)
    }
</script>
<style lang="scss" scoped>
    li{
        list-style-type: none;
    }
    li:hover{
        cursor: pointer;
    }
    .toolbar{
        width:100%;
        height:40px;
        background:#000;
        margin:0px;
        display: flex;
        justify-content:left;
        border-bottom:1px solide #000
    }
    .example-showcase .el-dropdown-link {
        cursor: pointer;
        color: var(--el-color-primary);
        display: flex;
        justify-content:center;
    }
    .el-dropdown-link {
        margin-top:10px;
    }
    .toolbar-icon,.toolbar-icon1 {
        width:30px;
        height:20px;
    }

    .toolbar-btn1 {
        margin-top:-12px;
    }
</style>