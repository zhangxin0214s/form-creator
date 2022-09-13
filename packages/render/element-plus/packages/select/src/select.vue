<template>
    <el-form-item
		:class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
		:label="widget.options.basic.label.value"
		:rules="widget.rules"
		:prop="propKey"
		:key="propKey">
      <el-cascader
        v-model="widget.value"
        :options="advanced.data"
        :disabled="basic.disabled.value"
        :placeholder="basic.defaultValue.value"
        @change="handleChangeEvent(props,ElMessage)"
      />
    </el-form-item>
  </template>
  
  <script setup name="select">
    import { ElMessage } from 'element-plus'
    import { watch} from 'vue';
    import { handleChangeEvent } from '../../hooks/handleChangeEvent'
    import { watchEvent } from '../../hooks/watchEvent'
    const props = defineProps(['widget', 'isEditor', 'selectedWidget', 'widgetType','ruleForm', 'propKey','parent', 'parentWidget']);
    const {basic, advanced} = props.widget.options;
    watchEvent(props,watch)
  
  </script>
  
  <style lang="scss" scoped>
    .hint {
      font-size: 12px;
      color: #9b9b9b;
    }
    // 选中样式
    .select {
      outline: 1px solid $--color-primary;
    }
  </style>
  