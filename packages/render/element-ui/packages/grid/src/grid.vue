<template>
    <div class="grid">
        <el-row
			class="grid-container"
			:style="`background-color: ${widget.options.basic.rowBackground.value}`"
		>
			<template
				v-for="(colWidget, colIdx) in widget.options.advanced.cols"
				:key="colIdx"
			>
				<Col
					:colWidget="colWidget"
					:widget="widget"
					:prop-key="propKey"
					:rule-form-ref="ruleFormRef"
					:is-editor="isEditor"
					:rule-form="ruleForm[widget.ruleFormKey] || ruleForm"
					:rule-form-key-type="widget.ruleFormKeyType"
					:style="`height: ${widget.options.basic.colHeight.value}px;`"
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
				</Col>
			</template>
		</el-row>
    </div>
</template>
<script>
	import mixins from '../../mixins/index.js'
	import Col from './grid-col.vue'
	export default {
	  name: "fcGrid",
	  mixins:[mixins],
	  components: [
	  	Col
	  ]
	};
</script>
<style scope>
	
</style>