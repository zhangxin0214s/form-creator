<template>
	<div class="input-container">
		<Mask :widget="widget">
			<Tag
				:widget="widget"
				v-if="!widget.options.basic.labelHidden"
			></Tag>
			<el-switch />
		</Mask>
	</div>
</template>
<script setup>
import Mask from '../Mask.vue';
import Tag from '../Tag.vue';
let props = defineProps(['widget']);
</script>
<style lang="scss" scoped>
</style>