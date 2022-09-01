<template>
	<widget-mask
		:widget="widget"
		:basic-prop="widget.options.basic"
		:advanced-prop="widget.options.advanced"
		:parent-widget="parentWidget"
	>
		<el-divider
			:direction="widget.options.basic['divider-direction'].value"
			:border-style="widget.options.basic['divider-style'].value"
			:content-position="widget.options.basic['divider-position'].value"
			:style="widget.options.basic['divider-css-style'].value"
		>
			<span
				v-if="widget.options.basic['divider-direction'].value ==='horizontal'"
				:style="widget.options.basic['divider-text-style'].value"
			>
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
