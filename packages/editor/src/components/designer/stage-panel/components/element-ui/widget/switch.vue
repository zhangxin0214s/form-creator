<template>
	<div class="input-container">
		<Mask :widget="widget">
			<el-switch
				v-model="boo"
				class="ml-2"
				style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
			/>
		</Mask>
	</div>
</template>
<script setup>
import Mask from '../Mask.vue';
let props = defineProps(['widget']);
let boo = true;
</script>
<style >
</style>