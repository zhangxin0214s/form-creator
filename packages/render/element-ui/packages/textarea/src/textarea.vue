<template>
	<el-form-item
		:label="widget.options.basic.label.value"
		:rules="widget.rules"
		:prop="propKey"
		:key="propKey"
	>
		<el-input
			type="textarea"
			:disabled="widget.options.basic.disabled.value"
			:placeholder="widget.options.basic.defaultValue.value"
			:maxlength="widget.options.basic.maxlength.value"
			:resize="widget.options.basic.resizeDirection.value"
			v-model="widget.value"
			@change="handleChangeEvent(props,ElMessage)"
			show-word-limit
		/>
	</el-form-item>
</template>
<script>
import mixins from '../../mixins/index.js';
export default {
	name: 'fcTextarea',
	mixins: [mixins],
};
</script>
  
  <style scoped>
.hint {
	font-size: 12px;
	color: #9b9b9b;
}
</style>
