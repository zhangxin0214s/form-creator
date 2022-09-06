<template>
	<container-mask
		:widget="widget"
		:style="`${widget.options.basic.isMoveDivider.value ? `top:${widget.options.basic.moveDistance.value}px`:''}`"
		:rule-form="ruleForm"
		:parent="parent"
	>
		<el-row
			class="grid-container"
			:class="[
				selectedWidget?.id === widget?.id && isEditor?'select':'',
			]"
			:style="
		`background-color:${widget.options.basic.rowBackground.value}`
		"
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
					:rule-form="ruleForm[widget.ruleFormKey] || ruleForm"
					:rule-form-key-type="widget.ruleFormKeyType"
					:style="`height:${widget.options.basic.colHeight.value}px;`"
				>
				</Col>
			</template>
		</el-row>
	</container-mask>

</template>
<script setup>
import { widgetStore } from '@/store/index';
import { storeToRefs } from 'pinia';
import { onMounted,watch } from 'vue';
import { ElMessage } from 'element-plus'
import containerMask from '../../common/containerMask.vue';
import Col from './grid-col.vue';
const _widgetStore = widgetStore();
const { selectedWidget, isEditor } = storeToRefs(_widgetStore);
const props = defineProps(['widget', 'parent', 'propKey', 'ruleForm', 'ruleFormRef']);

watch(
	() => props.propKey,
	(value) => {
		const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
		const parentRuleFormKeyType = props.parent?.ruleFormKeyType;
		const ruleFormKeyType = props.widget.ruleFormKeyType;

		if(ruleFormKey && !props.ruleForm[ruleFormKey]){
			console.log("监听到数据变化",ruleFormKey)
			if(parentRuleFormKeyType === 'object' || !parentRuleFormKeyType){
				if(ruleFormKeyType === 'array'){
					props.ruleForm[ruleFormKey] = []
				}else{
					props.ruleForm[ruleFormKey] = {}
				}
			}
			if(parentRuleFormKeyType === 'array'){
				if(ruleFormKeyType === 'array'){
					ElMessage({
							message: '父级容器是数组结构，该元素只支持设置对象结构',
							type: 'error',
							duration:1500
					})
				}else{
					const isExist = props.ruleForm.some(rule =>{Object.keys(rule).indexOf(ruleFormKey)>-1})
					if(!isExist){
						props.ruleForm.push({
							[ruleFormKey]:null
						})
					}
				}
			}
		}
	},
	{
		deep: true,
		immediate: true
	}
)

</script>
 <style lang="scss" scoped>
.grid-container {
	padding: 1px;
}
.grid-line {
	outline: 1px dashed #444;
}
.select {
	outline: 1px solid $--color-primary;
}
.el-row:last-child {
	margin-bottom: 0;
}
.el-col {
	border-radius: 4px;
}

.grid-content {
	border-radius: 4px;
	min-height: 36px;
	border: 1px dashed #444;
}
</style>