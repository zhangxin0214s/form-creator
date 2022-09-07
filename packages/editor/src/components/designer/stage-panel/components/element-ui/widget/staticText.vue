<template>
	<widget-mask
		:widget="widget"
		:basic-prop="widget.options.basic"
		:advanced-prop="widget.options.advanced"
		:parent-widget="parentWidget"
		:is-editor="isEditor"
		:selected-widget="selectedWidget"
	>
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
	</widget-mask>
</template>

<script setup>
// 这个文件不要格式化代码，上面的pre标签和内容必须在一行，谢谢
import widgetMask from '../common/widgetMask.vue';
defineProps(['widget','isEditor', 'selectedWidget', 'parentWidget']);
</script>
<style scoped>

</style>