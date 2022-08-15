<template>
	<el-form
		label-position="left"
		label-width="100px"
		:model="basicProp"
		style="max-width: 360px"
	>
		<el-form-item
			v-if="basicProp && basicProp[key1]?.label"
			:label="`${basicProp[key1]?.label}:`"
		>
			<el-input v-model="basicProp[props.key1].value" />
		</el-form-item>
	</el-form>
</template>
<script setup>
import { defineProps, ref ,reactive} from 'vue';
const props = defineProps(['basicProp', 'key1', 'value']);
</script>
<style lang="scss" scoped>
</style>