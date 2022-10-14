<template>
  <el-form-item
      :label="widget.options.basic.label.value"
      :rules="widget.rules"
      :prop="propKey"
      :key="propKey">
    <el-radio-group v-model="widget.value">
      <el-radio
          v-for="(item,index) in widget.options.advanced.optionItems"
          :key="index"
          :label="item.value"
          :disabled="item.disabled"
          :size="widget.options.basic.radioSize.value"
          :border="widget.options.basic.attribute.options[2].value"
          @change="handleChangeEvent(props,ElMessage)"
      >
        {{ item.label }}
      </el-radio>
    </el-radio-group>
  </el-form-item>
</template>
<script>
import mixins from '../../mixins/index.js';

export default {
  name:'fcRadio',
  mixins:[mixins],
};
</script>

<style scoped>
.hint {
  font-size: 12px;
  color: #9b9b9b;
}
</style>
