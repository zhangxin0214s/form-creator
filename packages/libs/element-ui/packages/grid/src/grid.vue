<template>
	<el-row
		class="grid-container"
		:style="`background-color:${widget.options.basic.rowBackground.value}`">
			<div
				v-for="(colWidget, colIdx) in widget.options.advanced.cols"
				:key="colIdx">
				<grid-col
					:colWidget="colWidget"
					:widget="widget"
					:prop-key="propKey"
					:rule-form-ref="ruleFormRef"
					:is-editor="isEditor"
					:rule-form="ruleForm[widget.ruleFormKey] || ruleForm"
					:rule-form-key-type="widget.ruleFormKeyType"
					:style="`height:${widget.options.basic.colHeight.value}px;`"
				>
				<slot 
					name="widgetChild"
					v-bind="{
						colWidget, 
						propKey,
						ruleForm: ruleForm[widget.ruleFormKey] || ruleForm,
						index:colIdx
					}">
				</slot>
			</grid-col>
			</div>
	</el-row>
</template>
<script>
	import mixins from '../../mixins/index.js'
	import GridCol from './grid-col.vue'
	export default {
		name: "fcGrid",
		mixins:[mixins],
		components: {
			GridCol
		}
	};
</script>
<style scope>
	
</style>