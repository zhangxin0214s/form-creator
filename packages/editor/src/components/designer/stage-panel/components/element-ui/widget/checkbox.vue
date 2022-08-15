<template>
  <div class="input-container">
    <widget-mask
        :widget="widget"
        :basicProp="widget.options.basic"
        :advancedProp="widget.options.advanced">

      <div>
        <el-checkbox-group v-for="ite in widget.options.advanced">
          <el-checkbox
              v-for="item in ite"
              :label="item.label"
              :disabled="item.disabled"
              :key="item.value">
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </widget-mask>
  </div>
</template>
<script setup>
import Mask from '../common/Mask.vue'
import Tag from '../common/Tag.vue'
import Hint from '../common/Hint.vue'

import widgetMask from '../common/widgetMask.vue'
import WidgetMask from '../common/widgetMask'

let props = defineProps(['widget'])
</script>
<style lang="scss" scoped>
</style>
