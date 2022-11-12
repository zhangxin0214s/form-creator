<template>
  <div
      :label="widget.options.basic.label.value"
      :rules="widget.rules"
      :style="`
        margin-left:${widget.options.basic.marginAdjustment.options[0].value}px;
        margin-top:${widget.options.basic.marginAdjustment.options[1].value}px;
        margin-right:${widget.options.basic.marginAdjustment.options[2].value}px;
        margin-bottom:${widget.options.basic.marginAdjustment.options[3].value}px
		  `"
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
        @click="handleOnClick"
    >{{ widget.options.basic.text.value }}
    </el-button>
  </div>
</template>
<script>
import mixins from '../../mixins/index.js';

export default {
  name:'fcButton',
  mixins:[mixins],
  methods: {
    handleOnClick() {
      this.useRegisterEvent().handleOnClick();
    }
  }

};
</script>

<style scoped>
.hint {
  font-size: 12px;
  color: #9b9b9b;
}
</style>
