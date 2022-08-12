<template>
	<div class="input-container">
		<Mask :widget="widget">
			<el-input
				:value="widget.options.basic.defaultValue"
			/>
		</Mask>
	</div>
</template>
<script setup>
import Mask from '../Mask.vue';
import { ref } from 'vue';
let props = defineProps(['widget']);
</script>
<style scoped>
</style>