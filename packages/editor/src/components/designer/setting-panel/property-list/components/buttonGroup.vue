<template>
	<div class="button-group-container">
		<span style="text-align:left;margin-bottom:10px; margin-right:10px;">
			{{basicProp[key1].label}}
		</span>
		<el-button-group class="ml-4">
			<el-button
				v-for="(item,index) in basicProp[key1].options"
				:class="basicProp[key1].value === item.value ? 'activation':''"
				:key="index"
				@click="basicProp[key1].value = item.value"
			>{{item.label}}</el-button>
		</el-button-group>
	</div>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps(['basicProp', 'key1', 'value']);
</script>
<style lang="scss" scoped>
.button-group-container {
	margin-bottom: 10px;
	font-size: 14px;
	color: dimgrey;
}
.activation{
  color:#4093ff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
</style>
