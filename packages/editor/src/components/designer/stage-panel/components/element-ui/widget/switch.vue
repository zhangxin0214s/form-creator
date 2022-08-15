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
import Mask from '../common/Mask.vue';
import Tag from '../common/Tag.vue';
import Hint from '../common/Hint.vue';
let props = defineProps(['widget']);
</script>
<style lang="scss" scoped>
</style>