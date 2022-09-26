<template>
	<el-form-item
		:class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
		:label="widget.options.basic.label.value"
		:rules="widget.rules"
		:prop="propKey"
		:key="propKey">
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
export default {
	name: 'fcTextarea'
}
</script>
<script setup name="textarea">
import { ElMessage } from 'element-plus'
import { watch} from 'vue';
import { handleChangeEvent } from '../../hooks/handleChangeEvent'
import { watchEvent } from '../../hooks/watchEvent'
import useRegisterEvent from '../../hooks/useRegisterEvent';
const props = defineProps(['widget', 'isEditor', 'selectedWidget', 'widgetType','ruleForm', 'propKey','parent', 'parentWidget']);

watchEvent(props,watch,ElMessage);
const { linkageWatchEvent } = useRegisterEvent({props});
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
