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
		<el-cascader
			v-model="widget.value"
			:options="advanced.data"
			:disabled="basic.disabled.value"
			:placeholder="basic.defaultValue.value"
			@change="handleChangeEvent(props,ElMessage)"
		/>
	</el-form-item>
</template>
<script>
export default {
	name: 'fcSelect'
}
</script>
<script setup name="select">
import { ElMessage } from 'element-plus';
import { watch } from 'vue';
import { handleChangeEvent } from '../../hooks/handleChangeEvent';
import { watchEvent } from '../../hooks/watchEvent';
import useRegisterEvent from '../../hooks/useRegisterEvent';
import { inject } from 'vue'
const props = defineProps(['widget', 'isEditor', 'selectedWidget', 'widgetType', 'ruleForm', 'propKey', 'parent', 'parentWidget']);
const { basic, advanced } = props.widget.options;
watchEvent(props, watch, ElMessage);

const { linkageWatchEvent } = useRegisterEvent({props, inject});
linkageWatchEvent({watch});
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
  