<template>
  <widget-mask
      :widget="widget"
      :basicProp="widget.options.basic"
      :advancedProp="widget.options.advanced"
      :parent-widget="parentWidget">
    <el-checkbox-group
        :size="widget.options.basic.checkSize.value"
        v-model="formConfig.ruleForm[widget.options.basic.ruleFormKey.value]"
    >
      <el-checkbox-button
          v-for="(item,index) in widget.options.advanced.optionItems"
          :key="index"
          :label="item.label"
          :disabled="item.disabled"
      >
        {{ item.label }}
      </el-checkbox-button>
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
