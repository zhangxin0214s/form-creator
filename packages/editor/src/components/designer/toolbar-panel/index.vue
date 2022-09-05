<template>
  <!-- 工具栏 -->
  <ul class="tool">
    <li class="tool-btn" v-for="item in tools">
      <div class="" v-if="!item.otherTag" @click="item.fun()">
        <svg-icon :icon-class="item.icon"/>
        <el-button link type="primary">{{ item.name }}</el-button>
      </div>
      <el-upload v-else class="upload_file"
                 :limit="1"
                 :show-file-list="false"
                 method="GET"
                 accept=".json"
                 @success="uploadFile"
                 action="">
        <svg-icon :icon-class="item.icon"/>
        <el-button link type="primary">{{ item.name }}</el-button>
      </el-upload>
    </li>
  </ul>

  <!-- 预览面板 -->
  <el-dialog v-model="dialogFormVisible" title="表单预览" @close="closePreview" destroy-on-close draggable>
    <form-renderer
        :widgetList="widgetList"
        :formConfig="formConfig"
    ></form-renderer>
  </el-dialog>

  <!-- 代码编辑器面板 -->
  <el-dialog v-model="dialogCodeVisible" title="代码编辑器" width="1200px" center draggable destroy-on-close>
    <code-editor
        class="codeEditor"
        :formData="formData"
        :language="`json`"
    />
  </el-dialog>

  <!-- 模板库 -->
  <el-dialog v-model="dialogTemplateVisible" title="模板库" width="1070px" destroy-on-close draggable>
    <temp-Library/>
  </el-dialog>

</template>
<script setup>
import { ref } from 'vue';
import { widgetStore } from '@/store/index';
import { storeToRefs } from 'pinia';
import formRenderer from '../../renderer/index.vue'
import { ElMessage } from 'element-plus'
import UploadInstance from 'element-plus'
import { deepClone } from '@/utils/util'
import { toRaw } from '@vue/reactivity'
import codeEditor from '../code-editor/index.vue'
import tempLibrary from '../../tempLibrary/index.vue'

const _widgetStore = widgetStore();
const {widgetList, formConfig} = storeToRefs(_widgetStore);
const dialogFormVisible = ref(false);
const dialogCodeVisible = ref(false);
const dialogTemplateVisible = ref(false)

const formData = ref({
  formConfig:toRaw(_widgetStore.formConfig),
  widgetList:toRaw(_widgetStore.widgetList),
})

/**
 * 模板库
 */
const library = () => {
  dialogTemplateVisible.value = true
}

/**
 * 清空
 */
const clear = () => {
  ElMessage({
    message:'清除成功',
    type:'success',
    duration:1000
  })
  _widgetStore.clearWidget();
}

/**
 * 预览
 */
const preview = () => {
  dialogFormVisible.value = true;
  _widgetStore.isEditor = false;
}

/**
 * 关闭预览
 */
const closePreview = () => {
  _widgetStore.isEditor = true;
  dialogFormVisible.value = false;
}

/**
 * 代码编辑器
 */
const exportCode = () => {
  console.log(formData);
  dialogCodeVisible.value = true;
}

const uploadFile = (file, files) => {
  let reader = new FileReader(),
      readText;
  reader.readAsText(files.raw);
  reader.onload = e => {
    readText = JSON.parse(e.currentTarget.result);
    // _widgetStore.clearWidget();
    _widgetStore.widgetList.push(...readText.widgetList);
  }
}

/**
 * 关闭代码编辑器
 */
const closeCodeEditor = () => {
  dialogCodeVisible.value = false;
}

const activeName = ref('first')

const handleClick = () => {
  console.log()
}

const tools = ref([
  {
    name:'撤销',
    icon:'tool-undo',
    fun:_widgetStore.undo,
  },
  {
    name:'反撤销',
    icon:'tool-redo',
    fun:_widgetStore.redo,
  },
  {
    name:'清空',
    icon:'tool-clear',
    fun:clear,
  },
  {
    name:'预览',
    icon:'tool-preview',
    fun:preview,
  },
  {
    name:'导出',
    icon:'tool-export',
    fun:exportCode,
  },
  {
    name:'导入',
    icon:'tool-import',
    otherTag:true,
  },
  {
    name:'模板库',
    icon:'tool-mall',
    fun:library
  },
])
</script>
<style lang="scss" scoped>
li {
  list-style-type: none;
}

.tool {
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
}

.codeEditor {
  margin-top: -30px;
}

:deep(.el-dropdown) {
  margin-top: 10px;
}
</style>
