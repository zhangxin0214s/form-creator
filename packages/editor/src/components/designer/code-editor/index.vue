<template>
  <div class="code-editor">
    <tool-bar/>
    <div id="codeBox"></div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, toRaw } from 'vue'
import toolBar from './code-editor-toolbar.vue'
import { widgetStore } from '@/store/index';
import * as monaco from "monaco-editor/esm/vs/editor/editor.api"
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
const _widgetStore = widgetStore();

self.MonacoEnvironment = {
  getWorker(workerId, label) {
    if (label === 'json') {
      return new JsonWorker();
    }
    return new EditorWorker();
  },
};

const editor = ref(null)

const initEditor = () => {
    // 初始化编辑器，确保dom已经渲染
    editor.value = monaco.editor.create(document.getElementById('codeBox'), {
        theme: 'vs-dark', //官方自带三种主题vs, hc-black, or vs-dark
        value: JSON.stringify(_widgetStore.formConfig), //编辑器初始显示文字
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
        fontSize: 15, //字体大小
        autoIndent: true, //自动布局
        quickSuggestionsDelay: 100, //代码提示延时
    });

    // 监听值的变化
    editor.value.onDidChangeModelContent((val) => {
        console.log(val.changes[0].text)
        console.log(toRaw(editor.value).getValue());    //获取输入的值
    })

    // 创建代码提醒
    monaco.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems: function(model, position) {
            var textUntilPosition = model.getValueInRange({
                startLineNumber: 1,
                startColumn: 1, 
                endLineNumber: position.lineNumber, 
                endColumn: position.column
            });
            var suggestions = [];
            var word = model.getWordUntilPosition(position);
            var range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
            };
            return {suggestions: suggestions};
        }
    });
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