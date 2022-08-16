<template>
  <widget-mask
		:widget="widget"
		:basicProp="widget.options.basic"
		:advancedProp="widget.options.advanced"
    :parent-widget="parentWidget">
        <el-button
            :type="widget.options.basic.type"
            :disabled="widget.options.basic.disabled"
        >{{ widget.options.basic.text.value }}
        </el-button>
  </widget-mask>
</template>

<script setup>
import widgetMask from '../common/widgetMask.vue'
let props = defineProps([
  'widget',
	'parentWidget'
]);
console.log(props)
</script>

<style scoped>

</style>
