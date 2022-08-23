<template>
  <widget-mask
      :widget="widget"
      :basicProp="widget.options.basic"
      :advancedProp="widget.options.advanced"
      :parent-widget="parentWidget">
    <el-config-provider :locale="locale">
      <el-date-picker
          clearable
          format="YYYY/MM/DD hh:mm:ss"
          value-format="YYYY/MM/DD hh:mm:ss"
          type="datetime"
          placeholder="请选择时间"
          :disabled="widget.options.basic.disabled.value"
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

