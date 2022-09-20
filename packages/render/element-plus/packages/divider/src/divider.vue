<template>
	<el-form-item
		:class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
		:label="widget.options.basic.label.value"
		:rules="widget.rules">
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
	</el-form-item>
</template>
<script>
export default {
	name: 'fcDivider'
}
</script>
<script setup name="divider">
defineProps(['widget', 'isEditor', 'selectedWidget','parentWidget']);
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
