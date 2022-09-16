<template>
	<el-form-item
		:class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
		:label="widget.options.basic.label.value"
		:rules="widget.rules"
		:prop="propKey"
		:key="propKey">
		<el-input
		:disabled="widget.options.basic.disabled.value"
		:placeholder="widget.options.basic.defaultValue.value"
		:type="widget.options.basic.inputType.value"
		v-model="widget.value"
		show-word-limit
		@change="handleChangeEvent(props,ElMessage)"/>
		<div class="hint">{{ widget.options.basic.hint.value }}</div>
	</el-form-item>
	
</template>
<script setup name="input">
import { ElMessage } from 'element-plus'
import { watch,reactive } from 'vue';
import { handleChangeEvent } from '../../hooks/handleChangeEvent'
import { watchEvent } from '../../hooks/watchEvent'
import {linkageWatchEvent} from '../../hooks/linkageWatchEvent'

const props = defineProps(['widget', 'isEditor', 'selectedWidget','widgetType','ruleForm', 'propKey','parent', 'parentWidget']);

watchEvent(props,watch,ElMessage);

linkageWatchEvent(props,watch,ElMessage);
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
