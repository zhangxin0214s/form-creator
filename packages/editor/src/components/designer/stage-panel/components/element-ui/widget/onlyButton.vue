<template>
  <widget-mask
      :widget="widget"
      :basicProp="widget.options.basic"
      :advancedProp="widget.options.advanced"
      :parent-widget="parentWidget">
    <el-radio-group
        :size="widget.options.basic.radioSize.value"
        v-model="formConfig.ruleForm[widget.options.basic.ruleFormKey.value]"
    >
      <el-radio-button
          v-for="(item,index) in widget.options.advanced.optionItems"
          :key="index"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
      >
        {{ item.label }}
      </el-radio-button>
    </el-radio-group>
  </widget-mask>
</template>
<script setup>
import widgetMask from '../common/widgetMask.vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
import { onMounted, ref } from 'vue'


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
