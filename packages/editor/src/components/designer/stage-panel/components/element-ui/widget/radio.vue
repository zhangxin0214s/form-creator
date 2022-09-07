<template>
  <widget-mask
      :widget="widget"
      :basicProp="widget.options.basic"
      :advancedProp="widget.options.advanced"
      :parent-widget="parentWidget"
      :prop-key="propKey"
		  :rule-form="ruleForm"
		  :parent="parent"
      :is-editor="isEditor"
		  :selected-widget="selectedWidget">
  >
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
  </widget-mask>
</template>
<script setup>
import widgetMask from '../common/widgetMask.vue';
import { ElMessage } from 'element-plus'
import { watch} from 'vue';
import { handleChangeEvent } from '../hooks/handleChangeEvent'
import { watchEvent } from '../hooks/watchEvent'

const props = defineProps(['widget','isEditor', 'selectedWidget', 'widgetType','ruleForm', 'propKey','parent', 'parentWidget']);

watchEvent(props,watch)
</script>
<style lang="scss" scoped>
</style>
