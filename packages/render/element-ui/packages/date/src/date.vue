<template>
  <el-form-item
      :label="widget.options.basic.label.value"
      :rules="widget.rules"
      :prop="propKey"
      :key="propKey">
      <el-date-picker
          clearable
          :placeholder="widget.options.basic.placeholder.value"
          :range-separator="widget.options.advanced.rangeSeparator.value"
          :start-placeholder="widget.options.advanced.startPlaceholder.value"
          :end-placeholder="widget.options.advanced.endPlaceholder.value"
          :type="widget.options.advanced.value"
          :disabled="widget.options.basic.attribute.options[0].value"
          :readonly="widget.options.basic.attribute.options[1].value"
          :editable="widget.options.basic.attribute.options[2].value"
          :size="widget.options.basic.dateSize.value"
          v-model="widget.value"
      />
    <span>{{widget.value}}</span>
  </el-form-item>
</template>
<script>
import mixins from '../../mixins/index.js';

export default {
  name:'fcDate',
  mixins:[mixins],
};
</script>

<style scoped>
.hint {
  font-size: 12px;
  color: #9b9b9b;
}
</style>
