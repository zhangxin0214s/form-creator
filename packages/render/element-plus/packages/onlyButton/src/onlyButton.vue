<template>
    <widget-mask
        :widget="widget"
        :basicProp="widget.options.basic"
        :advancedProp="widget.options.advanced"
        :parent-widget="parentWidget">
      <el-radio-group
          :size="widget.options.basic.radioSize.value"
          v-model="widget.value"
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
  <script setup name="onlyButton">
  import widgetMask from '../../common/widgetMask.vue';
  
  let props = defineProps([
    'widget',
    'parentWidget',
    'advancedProp'
  ])
  </script>
  <style lang="scss" scoped>
  </style>
  