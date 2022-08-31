<template>
  <widget-mask
      :widget="widget"
      :basicProp="widget.options.basic"
      :advancedProp="widget.options.advanced"
      :parent-widget="parentWidget">
    <el-checkbox-group v-model="formConfig.ruleForm[widget.options.basic.ruleFormKey.value]">
      <el-checkbox
          v-for="(item,index) in widget.options.advanced.optionItems"
          :key="index"
          :label="item.value"
          :disabled="item.disabled"
          :size="widget.options.basic.checkSize.value"
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

const _widgetStore = widgetStore();
const {formConfig} = storeToRefs(_widgetStore);

let props = defineProps([
  'widget',
  'parentWidget',
  'advancedProp'
])
</script>
<style lang="scss" scoped>
</style>
