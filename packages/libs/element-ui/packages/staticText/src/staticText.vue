<template>
	<el-form-item
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
<script>
import mixins from '../../mixins/index.js';
export default {
	name: 'fcStaticText',
	mixins: [mixins],
};
</script>
  
  <style scoped>
.hint {
	font-size: 12px;
	color: #9b9b9b;
}
</style>
