<template>
  <widget-mask
      :widget="widget"
      :basicProp="widget.options.basic"
      :advancedProp="widget.options.advanced"
      :parent-widget="parentWidget">
      <el-button
          :icon="widget.options.advanced.value"
          :type="widget.options.basic.type.value"
          :disabled="widget.options.basic.disabled.value"
          :size="widget.options.basic.btnSize.value"
          :round="widget.options.advanced.btnRound.value"
          :circle="widget.options.advanced.btnCircle.value"
          @click="handleClick"
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

const handleClick = () =>{
  let changeFn = new Function(props.widget.options.events.onClick.value)
  changeFn();
}
</script>

<style scoped>

</style>
