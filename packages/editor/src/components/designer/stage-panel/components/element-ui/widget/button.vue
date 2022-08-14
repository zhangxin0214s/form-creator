<template>
  <div class="input-container">
    <Mask :widget="widget">
      <el-button
          :type="widget.options.basic.type"
          :disabled="widget.options.basic.disabled"
      >{{ widget.options.basic.label }}
      </el-button>
    </Mask>

  </div>
</template>

<script setup>
import Mask from '../Mask'

let props = defineProps(['widget']);
console.log(props)
</script>

<style scoped>

</style>
