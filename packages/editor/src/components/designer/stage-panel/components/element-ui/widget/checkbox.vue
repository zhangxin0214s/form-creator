<template>
  <widget-mask 
		:widget="widget"
		:basicProp="widget.options.basic"
		:advancedProp="widget.options.advanced"
    :parent-widget="parentWidget">
        <el-checkbox-group>
          <el-checkbox
              v-for="(item,index) in widget.options.advanced.optionItems" :key="index"
              :label="item.label"
              >
          </el-checkbox>
        </el-checkbox-group>
  </widget-mask>
</template>
<script setup>
import widgetMask from '../common/widgetMask.vue'
import Hint from '../common/Hint.vue'

let props = defineProps([
  'widget',
	'parentWidget'
])
</script>
<style lang="scss" scoped>
</style>
