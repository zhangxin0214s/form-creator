<template>
  <el-form-item
      :label="widget.options.basic.label.value"
      :rules="widget.rules"
  >
    <el-button
        :icon="widget.options.advanced.value"
        :type="widget.options.basic.btnType.value"
        :disabled="widget.options.basic.disabled.value"
        :size="widget.options.basic.btnSize.value"
        :round="widget.options.advanced.btnRound.value"
        :circle="widget.options.advanced.btnCircle.value"
        :plain="widget.options.basic.plain.value"
        :auto-insert-space="widget.options.basic.space.value"
        @click="useRegisterEvent().handleOnClick"
    >{{ widget.options.basic.text.value }}
    </el-button>
  </el-form-item>
</template>
<script>
import mixins from '../../mixins/index.js';

export default {
  name:'fcButton',
  mixins:[mixins],
};
</script>

<style scoped>
.hint {
  font-size: 12px;
  color: #9b9b9b;
}
</style>
