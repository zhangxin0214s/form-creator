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
    <el-config-provider>
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
    </el-config-provider>
    <span>{{widget.value}}</span>
  </el-form-item>
  </template>
  <script>
    export default {
      name: 'fcDate'
    }
  </script>
<script setup name="dateTimeRange">
// 将时间控件修改为中文
// import zhCn from 'element-plus/lib/locale/lang/zh-cn'
// const locale = zhCn
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
  