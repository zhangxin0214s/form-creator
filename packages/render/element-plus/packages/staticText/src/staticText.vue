<template>
	<el-form-item
		:class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
		:label="widget.options.basic.label.value"
		:rules="widget.rules">
		<pre :style="{
			'width':'100%',
			'margin':'inherit',
			'line-height':`${widget.options.basic['static-text-line-height'].value}`,
			'text-align':`${widget.options.basic.alignment.value}`,
			'font-size':`${widget.options.basic['font-size'].value}px`,
			'color':`${widget.options.basic['font-color'].value}`,
			'font-style':`${widget.options.basic['font-style'].options[1].value ? 'italic' : 'normal'}`,
			'font-weight':`${widget.options.basic['font-style'].options[0].value ? 'bold' : 'normal'}`,
			'text-decoration':`${widget.options.basic['font-style'].options[2].value ? 'underline' : 'none'}`,
		}
		"><span v-show="widget.options.basic.addRequired.value" style="color:red">*</span><span>{{widget.options.basic.textareaDefaultValue.value}}</span></pre>
	</el-form-item>
</template>

<script setup name="staticText">
	import { watch } from 'vue'
	import { ElMessage } from 'element-plus'
	import {linkageWatchEvent} from '../../hooks/linkageWatchEvent'
// 这个文件不要格式化代码，上面的pre标签和内容必须在一行，谢谢
const props = defineProps(['widget','isEditor', 'selectedWidget', 'parentWidget']);

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