<template>
  <widget-mask
      :widget="widget"
      :basicProp="widget.options.basic"
      :advancedProp="widget.options.advanced"
      :parent-widget="parentWidget">
    <el-radio-group v-model="formConfig.ruleForm[widget.options.basic.ruleFormKey.value]">
      <el-radio
          v-for="(item,index) in widget.options.advanced.optionItems"
          :key="index"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
          :size="widget.options.basic.radioSize.value"
      >
        {{ item.label }}
      </el-radio>
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
// const radio = ref("value值1")
let props = defineProps([
  'widget',
  'parentWidget',
  'advancedProp'
])
</script>
<style lang="scss" scoped>
</style>
