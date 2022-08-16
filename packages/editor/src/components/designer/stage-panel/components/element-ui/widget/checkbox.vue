<template>
  <widget-mask
      :widget="widget"
      :basicProp="widget.options.basic"
      :advancedProp="widget.options.advanced">
      <el-checkbox
          v-for="(item,index) in widget.options.advanced.optionItems"
          :key="index"
          :label="item.label"
          :disabled="item.disabled"
          v-model="item.isSelect"
      >
      </el-checkbox>
  </widget-mask>
</template>
<script setup>
import widgetMask from '../common/widgetMask.vue'
import { onMounted, ref } from 'vue'

let props = defineProps([
  'widget',
  'parentWidget',
  'advancedProp'
])
</script>
<style lang="scss" scoped>
</style>
