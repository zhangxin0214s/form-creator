<template>
	<div class="input-container">
		<Mask :widget="widget">
			<Tag
				:widget="widget"
				v-if="!widget.options.basic.labelHidden"
			></Tag>
			<div>
				<el-switch />
				<Hint :widget="widget"></Hint>
			</div>
		</Mask>
	</div>
</template>
<script setup>
import Mask from '../Mask.vue';
import Tag from '../Tag.vue';
import Hint from '../Hint.vue';
let props = defineProps(['widget']);
</script>
<style lang="scss" scoped>
</style>