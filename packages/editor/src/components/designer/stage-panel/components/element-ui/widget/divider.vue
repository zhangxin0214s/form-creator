<template>
	<widget-mask
		:widget="widget"
		:basic-prop="widget.options.basic"
		:advanced-prop="widget.options.advanced"
		:parent-widget="parentWidget"
		:style="`top:${widget.options.basic.moveDistance.value}px`"
	>
		<el-divider
			:direction="widget.options.basic['divider-direction'].value"
			:border-style="widget.options.basic['divider-style'].value"
			:content-position="widget.options.basic['divider-position'].value"
			:style="widget.options.basic.isMoveDivider.value ? `margin:0`:``"
		>
			<span v-if="widget.options.basic['divider-direction'].value ==='horizontal'">
				{{widget.options.basic['divider-content'].value}}
			</span>
		</el-divider>
	</widget-mask>
</template>

<script setup>
import widgetMask from '../common/widgetMask.vue';
defineProps(['widget', 'parentWidget']);
</script>

<style scoped>
</style>
