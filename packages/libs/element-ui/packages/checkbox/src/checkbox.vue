<template>
  <el-form-item
      :label="widget.options.basic.label.value"
      :rules="widget.rules"
      :prop="propKey"
      :key="propKey"
  >
    <el-checkbox-group
        v-model="widget.value"
        @change="handleChangeEvent(props,ElMessage)"
    >
      <el-checkbox
          v-for="(item,index) in widget.options.advanced.optionItems"
          :key="index"
          :label="item.value"
          :disabled="item.disabled"
          :size="widget.options.basic.checkSize.value"
          :border="widget.options.basic.attribute.options[2].value"
          :style="`margin-left:${widget.options.basic['margin-left-right'].value}px`"
      >
        {{ item.label }}
      </el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>
<script>
import mixins from '../../mixins/index.js';

export default {
  name:'fcCheckbox',
  mixins:[mixins],
};
</script>

<style scoped>
.hint {
  font-size: 12px;
  color: #9b9b9b;
}
</style>
