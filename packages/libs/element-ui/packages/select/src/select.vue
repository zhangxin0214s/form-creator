<template>
	<el-form-item
		:label="widget.options.basic.label.value"
		:rules="widget.rules"
		:prop="propKey"
		:key="propKey"
	>
		<el-cascader
			v-model="widget.value"
			:options="widget.options.advanced.data"
			:disabled="widget.options.basic.disabled.value"
			:placeholder="widget.options.basic.defaultValue.value"
			@change="handleChangeEvent(_props)"
		/>
	</el-form-item>
</template>
<script>
	import mixins from '../../mixins/index.js'
  export default {
    name: "fcSelect",
    mixins:[mixins]
  };
</script>

<style scoped>
	.hint {
    font-size: 12px;
    color: #9b9b9b;
	}
</style>
