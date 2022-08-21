<template>
    <el-form
		label-position="left"
		label-width="100px"
		:model="eventsProp"
		style="max-width: 360px"
	> 
		<el-form-item
			v-if="eventsProp[key1]?.label"
			:label="`${eventsProp[key1]?.label}:`"
		>
			<svg-icon class="icon" icon-class="code-edit"/>
		</el-form-item> 
	</el-form>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps(['eventsProp', 'key1']);
</script>
<style lang="scss" scoped>
	.icon{
		width:25px;
		height:25px;
		margin-left:-20px;
	}
	.icon:hover {
		cursor:pointer;
	}
</style>