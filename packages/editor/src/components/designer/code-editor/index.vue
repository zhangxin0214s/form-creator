<template>
  <div class="code-editor">
    <tool-bar
      @changeFont="changeFont"
      @prettifyCode="prettifyCode"
      @copyCode="copyCode"
      @downloadJson="downloadJson"
    ></tool-bar>
    <div id="codeBox"></div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, toRaw } from 'vue'
import toolBar from './code-editor-toolbar.vue'
import * as monaco from "monaco-editor";
import { ElMessage,ElMessageBox } from 'element-plus'
import useClipboard from 'vue-clipboard3';
import { saveAs } from 'file-saver'
import { generateId } from '@/utils/util'

const props = defineProps(['formData','language'])
const emit = defineEmits(['changeCode'])
const defaultContent = props.language === 'javascript' ? props.formData:JSON.stringify(props.formData)
let monacoEditor = null;

/**
 * 初始化monaco editor
 */
const initEditor = () => {
      document.getElementById('codeBox').innerHTML = ''
      monacoEditor = monaco.editor.create(document.getElementById('codeBox'), {
        theme: 'vs-dark', //官方自带三种主题vs, hc-black, or vs-dark
        value: defaultContent, //编辑器初始显示文字
        readOnly: false,
        automaticLayout: true,
        language: props.language,
        folding: true,  //代码折叠
        roundedSelection: false, // 右侧不显示编辑器预览框
        autoIndent: true, // 自动缩进
        selectOnLineNumbers: true,//显示行号
        // cursorStyle: 'line', //光标样式
        automaticLayout: true, //自动布局
        glyphMargin: true, //字形边缘
        useTabStops: false,
        fontSize: 16, //字体大小
        autoIndent: true, //自动布局
        quickSuggestionsDelay: 100, //代码提示延时
    });

    // 监听值的变化
    monacoEditor.onDidChangeModelContent((val) => {
      // console.log(monacoEditor.getValue());    //获取输入的值
      emit('changeCode', monacoEditor.getValue())
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
  ElMessage({
        message: '格式化成功',
        type: 'success',
        duration:1000
  })
}

/**
 * 复制代码
 */
const { toClipboard } = useClipboard();
const copyCode = async () =>{
  try {
    await toClipboard(JSON.stringify(props.formData));
    ElMessage({
        message: '复制成功',
        type: 'success',
        duration:1000
    })
  } catch (e) {
    console.error(e);
    ElMessage({
      message: '复制失败',
      type: 'error',
      duration:1000
    })
  } 
}

/**
 * 下载Json文件
 */
const downloadJson = () =>{
  ElMessageBox.prompt('请输入文件名','下载文件',{
    confirmButtonText:'确定',
    cancelButtonText:'取消',
    closeOnClickModal:false,
    inputValue:`${generateId()}.json`,
    inputPlaceholder:'请输入文件名'
  }).then(({value}) =>{
    let jsonContent = JSON.stringify(props.formData, null, '  ')
    const fileBlob = new Blob([jsonContent], { type: 'text/plain;charset=utf-8' })
    saveAs(fileBlob ,value)
  })
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