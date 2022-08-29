<template>
  <widget-mask
      :widget="widget"
      :basicProp="widget.options.basic"
      :advancedProp="widget.options.advanced"
      :parent-widget="parentWidget">
    <el-config-provider :locale="locale">
      <el-time-picker
          clearable
          format="HH:mm:ss"
          :validate-event="false"
          :placeholder="widget.options.basic.placeholder.value"
          :disabled="widget.options.basic.attribute.options[0].value"
          :readonly="widget.options.basic.attribute.options[1].value"
          :editable="widget.options.basic.attribute.options[2].value"
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

