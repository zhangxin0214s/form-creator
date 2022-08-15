<template>
  <div class="input-container">
    <Mask :widget="widget">
      <Tag
          :widget="widget"
          v-if="!widget.options.basic.labelHidden.value"/>
      <div>
        <el-checkbox-group v-for="ite in widget.options.advanced">
          <el-checkbox
              v-for="item in ite"
              :label="item.label"
              :disabled="item.disabled"
              :key="item.value">
          </el-checkbox>
        </el-checkbox-group>
        <Hint :widget="widget"/>
      </div>
    </Mask>
  </div>
</template>
<script setup>
import Mask from '../common/Mask.vue'
import Tag from '../common/Tag.vue'
import Hint from '../common/Hint.vue'

let props = defineProps(['widget'])
</script>
<style lang="scss" scoped>
</style>
