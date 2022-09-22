<template>
  <el-form-item
      :label="widget.options.basic.label.value"
      :rules="widget.rules"
      :prop="propKey"
      :key="propKey">
      <el-time-picker
          clearable
          arrow-control
          :placeholder="widget.options.basic.placeholder.value"
          :disabled="widget.options.basic.attribute.options[0].value"
          :readonly="widget.options.basic.attribute.options[1].value"
          :editable="widget.options.basic.attribute.options[2].value"
          :size="widget.options.basic.dateSize.value"
          :is-range="widget.options.advanced.isRange.value"
          :start-placeholder="widget.options.advanced.startPlaceholder.value"
          :end-placeholder="widget.options.advanced.endPlaceholder.value"
          :range-separator="widget.options.advanced.rangeSeparator.value"
          v-model="widget.value"
      />
  </el-form-item>
</template>
<script>
import mixins from '../../mixins/index.js';

export default {
  name:'fcTime',
  mixins:[mixins],
};
</script>

<style scoped>
.hint {
  font-size: 12px;
  color: #9b9b9b;
}
</style>
