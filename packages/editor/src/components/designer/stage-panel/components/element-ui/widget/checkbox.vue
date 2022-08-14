<template>
  <div class="input-container">
    <Mask :widget="widget">
      <Tag
          :widget="widget"
          v-if="!widget.options.basic.labelHidden"/>
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
import Mask from '../Mask'
import Tag from '../Tag'
import Hint from '../Hint'

let props = defineProps(['widget'])
</script>
<style lang="scss" scoped>
</style>
