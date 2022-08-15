<template>
	<el-form
		label-position="left"
		label-width="100px"
		:model="basicProp"
		style="max-width: 360px"
	>
		<el-form-item
			v-if="basicProp[key1]?.label"
			:label="`${basicProp[key1]?.label}:`"
		>
			<el-switch v-model="isOpen"/>
		</el-form-item>
	</el-form>
</template>
<script setup>
import { defineProps,ref } from 'vue';
const props = defineProps(['basicProp', 'key1', 'value']);
let isOpen = ref(props.value.value);

</script>
<style lang="scss" scoped>
</style>