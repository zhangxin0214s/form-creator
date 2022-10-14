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
		<el-switch
			v-model="widget.value"
			:disabled="widget.options.basic.disabled.value"
			@change="handleChangeEvent(props,ElMessage,handleOnChange)"/>
	</el-form-item>
</template>
<script>
export default {
	name: 'fcSwitch'
}
</script>
<script setup>
import { watch } from 'vue'
import { ElMessage } from 'element-plus'
import { handleChangeEvent } from '../../hooks/handleChangeEvent'
import { watchEvent } from '../../hooks/watchEvent'
import useRegisterEvent from '../../hooks/useRegisterEvent';
import { inject } from 'vue'
const props = defineProps([
	'widget',
	'ruleForm',
	'propKey',
	'parent',
	'parentWidget',
	'isEditor',
	'selectedWidget'
])

watchEvent(props,watch,ElMessage)

const { handleOnChange, linkageWatchEvent } = useRegisterEvent({props, inject});
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
