<template>
  <widget-mask
      :widget="widget"
      :basicProp="widget.options.basic"
      :advancedProp="widget.options.advanced"
      :parent-widget="parentWidget">
    <el-radio-group v-model="radio">
      <el-radio
          v-for="(item,index) in widget.options.advanced.optionItems"
          :key="index"
          :label="item.value"
          :disabled="item.disabled"
          v-model="item.value"
      >
        {{ item.label }}
      </el-radio>
    </el-radio-group>
  </widget-mask>
</template>
<script setup>
import widgetMask from '../common/widgetMask.vue'
import { onMounted, ref } from 'vue'

const radio = ref("1")
let props = defineProps([
  'widget',
  'parentWidget',
  'advancedProp'
])
</script>
<style lang="scss" scoped>
</style>
