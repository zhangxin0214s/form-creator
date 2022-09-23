<template>
  <el-form-item
		:class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
		:label="widget.options.basic.label.value"
		:rules="widget.rules"
		:prop="propKey"
		:key="propKey">
    <el-radio-group v-model="widget.value">
      <el-radio
          v-for="(item,index) in widget.options.advanced.optionItems"
          :key="index"
          :label="item.value"
          :disabled="item.disabled"
          :size="widget.options.basic.radioSize.value"
          :border="widget.options.basic.attribute.options[2].value"
          @change="handleChangeEvent(props,ElMessage)"
      >
        {{ item.label }}
      </el-radio>
    </el-radio-group>
  </el-form-item>
  </template>
<script>
export default {
	name: 'fcRadio'
}
</script>
  <script setup name="radio">
  import { ElMessage } from 'element-plus'
  import { watch} from 'vue';
  import { handleChangeEvent } from '../../hooks/handleChangeEvent'
  import { watchEvent } from '../../hooks/watchEvent'
  import {linkageWatchEvent} from '../../hooks/linkageWatchEvent'
  import { inject } from 'vue'
  const props = defineProps(['widget','isEditor', 'selectedWidget', 'widgetType','ruleForm', 'propKey','parent', 'parentWidget']);
  
  watchEvent(props,watch,ElMessage);
  linkageWatchEvent(props,watch,inject);
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
  