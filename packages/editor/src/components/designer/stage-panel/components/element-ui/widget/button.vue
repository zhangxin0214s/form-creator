<template>
  <widget-mask
      :widget="widget"
      :basicProp="widget.options.basic"
      :advancedProp="widget.options.advanced">
    <el-button
        :type="widget.options.basic.type"
        :disabled="widget.options.basic.disabled"
    >{{ widget.options.basic.label }}
    </el-button>
  </widget-mask>
</template>

<script setup>
import widgetMask from '../common/widgetMask.vue'

let props = defineProps(['widget']);
console.log(props)
</script>

<style scoped>

</style>
