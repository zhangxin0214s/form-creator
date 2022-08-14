<template>
	<div class="input-container">
		<Mask :widget="widget">
			<Tag
				:widget="widget"
				v-if="!widget.options.basic.labelHidden"
			></Tag>
			<div>
				<el-input
					:value="widget.options.basic.defaultValue"
					:disabled="widget.options.basic.disabled"
				/>
				<Hint :widget="widget"></Hint>
			</div>
		</Mask>
	</div>
</template>

<script setup>
import Mask from '../Mask.vue';
import Tag from '../Tag.vue';
import Hint from '../Hint.vue';
import { onMounted, ref } from 'vue';
let props = defineProps(['widget']);
onMounted(() => {
	const inputDom = document.getElementsByClassName('el-input')[0];
	inputDom.style.width = props.widget.options.advanced.width + 'px';
});
</script>
<style scoped>
</style>