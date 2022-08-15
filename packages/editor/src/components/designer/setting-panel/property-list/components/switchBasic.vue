<template>
	<el-form
		label-position="left"
		label-width="100px"
		:model="widgetProp"
		style="max-width: 360px"
	>
		<el-form-item
			v-if="widgetProp[key1]?.label"
			:label="`${widgetProp[key1]?.label}:`"
		>
			<el-switch v-model="isOpen"/>
		</el-form-item>
	</el-form>
</template>
<script setup>
import { defineProps,ref } from 'vue';
const props = defineProps(['widgetProp', 'key1', 'value']);
let isOpen = ref(props.value.value);
</script>
<style lang="scss" scoped>
</style>