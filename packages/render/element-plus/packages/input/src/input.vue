<template>
	<el-form-item
		:class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
		:style="`
			margin-left:${widget.options.basic.marginAdjustment?.options[0].value}px;
			margin-top:${widget.options.basic.marginAdjustment?.options[1].value}px;
			margin-right:${widget.options.basic.marginAdjustment?.options[2].value}px;
			margin-bottom:${widget.options.basic.marginAdjustment?.options[3].value}px
		`"
		:label="widget.options.basic.label.value"
		:rules="widget.rules"
		:prop="propKey"
		:key="propKey"
	>
		<el-input
			:disabled="widget.options.basic.disabled.value"
			:placeholder="widget.options.basic.defaultValue.value"
			:type="widget.options.basic.inputType.value"
			v-model="widget.value"
			show-word-limit
			@change="handleChangeEvent(props,ElMessage)"
		/>
		<div class="hint">{{ widget.options.basic.hint.value }}</div>
	</el-form-item>
</template>
<script>
export default {
	name: 'fcInput',
};
</script>
<script setup name="input">
import { ElMessage } from 'element-plus';
import { watch } from 'vue';
import { handleChangeEvent } from '../../hooks/handleChangeEvent';
import { watchEvent } from '../../hooks/watchEvent';
import useRegisterEvent from '../../hooks/useRegisterEvent';

import { inject } from 'vue';

const props = defineProps(['widget', 'isEditor', 'selectedWidget', 'widgetType', 'ruleForm', 'propKey', 'parent', 'parentWidget']);

const { linkageWatchEvent } = useRegisterEvent({ props, inject });
linkageWatchEvent({ watch });

watchEvent(props, watch, ElMessage);
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
