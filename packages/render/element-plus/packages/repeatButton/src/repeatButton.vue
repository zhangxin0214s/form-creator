<template>
    <widget-mask
        :widget="widget"
        :basicProp="widget.options.basic"
        :advancedProp="widget.options.advanced"
        :parent-widget="parentWidget">
      <el-checkbox-group
          :size="widget.options.basic.checkSize.value"
          v-model="widget.value"
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
  <script setup name="repeatButton">
  import widgetMask from '../../common/widgetMask.vue';
  
  let props = defineProps([
    'widget',
    'parentWidget',
    'advancedProp'
  ])
  </script>
  <style lang="scss" scoped>
  </style>
  