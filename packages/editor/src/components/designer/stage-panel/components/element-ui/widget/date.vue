<template>
  <widget-mask
      :widget="widget"
      :basicProp="widget.options.basic"
      :advancedProp="widget.options.advanced"
      :parent-widget="parentWidget">
    <el-config-provider :locale="locale">
      <el-date-picker
          clearable
          :placeholder="widget.options.basic.placeholder.value"
          :range-separator="widget.options.advanced.rangeSeparator.value"
          :start-placeholder="widget.options.advanced.startPlaceholder.value"
          :end-placeholder="widget.options.advanced.endPlaceholder.value"
          :type="widget.options.advanced.value"
          :disabled="widget.options.basic.disabled.value"
          :readonly="widget.options.basic.readonly.value"
          :editable="widget.options.basic.editable.value"
          :size="widget.options.basic.dateSize.value"
          v-model="widget.options.basic.value"
      />
    </el-config-provider>
  </widget-mask>
</template>

<script setup>
import widgetMask from '../common/widgetMask.vue'
// 将时间控件修改为中文
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
const locale = zhCn
let props = defineProps([
  'widget',
  'parentWidget'
]);

</script>

<style scoped>

</style>

