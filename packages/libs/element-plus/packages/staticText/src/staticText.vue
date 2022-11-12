<template>
	<div
		:class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
		:label="widget.options.basic.label.value"
		:rules="widget.rules"
		:style="`
			margin-left:${widget.options.basic.marginAdjustment?.options[0].value}px;
			margin-top:${widget.options.basic.marginAdjustment?.options[1].value}px;
			margin-right:${widget.options.basic.marginAdjustment?.options[2].value}px;
			margin-bottom:${widget.options.basic.marginAdjustment?.options[3].value}px
		`"
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
		"><span v-show="widget.options.basic.addRequired.value" style="color:red">*</span><span>{{widget.value}}</span></pre>
	</div>
</template>

<script>
export default {
	name: 'fcStaticText'
}
</script>
<script setup name="staticText">
	// 这个文件不要格式化代码，上面的pre标签和内容必须在一行，谢谢
	const props = defineProps(['widget','isEditor', 'selectedWidget', 'parentWidget']);

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
	.el-form-item{
		margin-bottom:0px;
	}
	
</style>