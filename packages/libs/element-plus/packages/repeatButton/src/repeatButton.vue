<template>
  <el-form-item
		:class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
		:label="widget.options.basic.label.value"
		:rules="widget.rules"
		:prop="propKey"
		:key="propKey"
    :style="`
			margin-left:${widget.options.basic.marginAdjustment?.options[0].value}px;
			margin-top:${widget.options.basic.marginAdjustment?.options[1].value}px;
			margin-right:${widget.options.basic.marginAdjustment?.options[2].value}px;
			margin-bottom:${widget.options.basic.marginAdjustment?.options[3].value}px
		`"
    >
    <el-checkbox-group
        :size="widget.options.basic.checkSize.value"
        v-model="widget.value"
    >
      <el-checkbox-button
          v-for="(item,index) in widget.options.advanced.optionItems"
          :key="index"
          :label="item.label"
          :disabled="item.disabled"
      >
        {{ item.label }}
      </el-checkbox-button>
    </el-checkbox-group>
  </el-form-item>
</template>
<script>
export default {
	name: 'fcRepeatButton'
}
</script>
<script setup name="repeatButton">

const props = defineProps(['widget', 'isEditor', 'selectedWidget','widgetType','ruleForm', 'propKey','parent', 'parentWidget']);
</script>
<style lang="scss" scoped>
.hint {
	font-size: 12px;
	color: #9b9b9b;
}
// 选中样式
.select {
	outline: 1px solid $--color-primary;
}
</style>
  