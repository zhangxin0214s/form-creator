<template>
  <widget-mask
      :widget="widget"
      :basicProp="widget.options.basic"
      :advancedProp="widget.options.advanced"
      :parent-widget="parentWidget"
      :prop-key="propKey"
      :rule-form="ruleForm"
      :parent="parent">
    <el-checkbox-group
      v-model="widget.value"
      @change="handleChangeEvent(props,ElMessage)">
      <el-checkbox
          v-for="(item,index) in widget.options.advanced.optionItems"
          :key="index"
          :label="item.value"
          :disabled="item.disabled"
          :size="widget.options.basic.checkSize.value"
          :border="widget.options.basic.attribute.options[2].value"
          :style="`margin-left:${widget.options.basic['margin-left-right'].value}px`"
      >
        {{ item.label }}
      </el-checkbox>
    </el-checkbox-group>
  </widget-mask>
</template>
<script setup>
import widgetMask from '../common/widgetMask.vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
import { ElMessage } from 'element-plus'
import { watch} from 'vue';
import { handleChangeEvent } from '../hooks/handleChangeEvent'
import { watchEvent } from '../hooks/watchEvent'
const _widgetStore = widgetStore();
const {formConfig} = storeToRefs(_widgetStore);
const props = defineProps(['widget', 'widgetType','ruleForm', 'propKey','parent', 'parentWidget']);

watchEvent(props,watch)
</script>
<style lang="scss" scoped>
</style>
