<template>
  <el-form-item
		:class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
		:label="widget.options.basic.label.value"
		:rules="widget.rules"
		:prop="propKey"
		:key="propKey">
    <el-config-provider>
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
    </el-config-provider>
  </el-form-item>
</template>
<script>
export default {
	name: 'fcTime'
}
</script>
<script setup name="time">
// 将时间控件修改为中文
// import zhCn from 'element-plus/lib/locale/lang/zh-cn'

// const locale = zhCn
import { watch } from 'vue'
import { ElMessage } from 'element-plus'
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
  