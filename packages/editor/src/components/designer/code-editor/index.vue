<template>
  <div class="code-editor">
    <tool-bar
      @changeFont="changeFont"
      @prettifyCode="prettifyCode"
    ></tool-bar>
    <div id="codeBox"></div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, toRaw } from 'vue'
import toolBar from './code-editor-toolbar.vue'
import { widgetStore } from '@/store/index';
import { defineProps,defineEmits } from 'vue';
import * as monaco from "monaco-editor"

const _widgetStore = widgetStore();
const props = defineProps(['formConfig'])
let monacoEditor = null;
/**
 * 初始化monaco editor
 */
const initEditor = () => {
      monacoEditor = monaco.editor.create(document.getElementById('codeBox'), {
        theme: 'vs-dark', //官方自带三种主题vs, hc-black, or vs-dark
        value: JSON.stringify(props.formConfig), //编辑器初始显示文字
        readOnly: false,
        automaticLayout: true,
        language: "json",
        folding: true,  //代码折叠
        roundedSelection: false, // 右侧不显示编辑器预览框
        autoIndent: true, // 自动缩进
        selectOnLineNumbers: true,//显示行号
        roundedSelection: false, // 右侧不显示编辑器预览框
        cursorStyle: 'line', //光标样式
        automaticLayout: true, //自动布局
        glyphMargin: true, //字形边缘
        useTabStops: false,
        fontSize: 16, //字体大小
        autoIndent: true, //自动布局
        quickSuggestionsDelay: 100, //代码提示延时
    });

    // 监听值的变化
    monacoEditor.onDidChangeModelContent((val) => {
      // console.log(toRaw(monacoEditor).getValue());    //获取输入的值
    })
    
    setTimeout(()=>{
       monacoEditor.trigger('anyString', 'editor.action.formatDocument')
    },100)
}

/**
 * 修改字号
 */
const changeFont = (e) =>{
  monacoEditor.updateOptions({
		fontSize: e
	});
}

/**
 * 格式化代码
 */
const prettifyCode = () =>{
  monacoEditor.trigger('anyString', 'editor.action.formatDocument')
}
onMounted(() => {
    initEditor()
})
</script>

<style scoped>
.code-editor{
    width:100%;
    height:100%;
    background:red;
}
#codeBox {
  height: 600px;
  text-align: left;
}
</style>