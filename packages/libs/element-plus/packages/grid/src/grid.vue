<template>
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
					:is-editor="isEditor"
					:style="{height:(widget.options.basic.colHeight.value?`${widget.options.basic.colHeight.value}px`:'auto'),padding:0}">
					<slot 
					 name="widgetChild"
					 v-bind="{
							colWidget, 
							propKey,
							ruleForm: childRuleForm,
							index: colIdx
					 }">
					</slot>
				</Col>
			</template>
		</el-row>
</template>
<script>
export default {
	name: 'fcGrid'
}
</script>
<script setup name="grid">
import { watch } from 'vue';
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import Col from './grid-col.vue';


const props = defineProps([
	'widget',
	'selectedWidget', 
	'isEditor', 
	'parent', 
	'propKey', 
	'ruleForm', 
	'ruleFormRef'
]);


let childRuleForm = ref(null)
watch(
	() => props.propKey,
	(value) => {
		const ruleFormKey = props.widget.ruleFormKey;
		const parentRuleFormKeyType = props.parent?.ruleFormKeyType;
		const ruleFormKeyType = props.widget.ruleFormKeyType;
		console.log(ruleFormKey,'监听到变化',props.ruleForm,";",childRuleForm.value)
		if(ruleFormKey && props.ruleForm &&!props.ruleForm[ruleFormKey]){
			console.log(ruleFormKey,"监听到数据变化",props.parent)
			if(parentRuleFormKeyType === 'object' || !parentRuleFormKeyType){
				if(ruleFormKeyType === 'array'){
					props.ruleForm[ruleFormKey] = []
				}else{
					props.ruleForm[ruleFormKey] = {}
				}
				childRuleForm.value = props.ruleForm[ruleFormKey];

			}
			if(parentRuleFormKeyType === 'array'){
				if(ruleFormKeyType === 'array'){
					ElMessage({
							message: '父级容器是数组结构，该元素只支持设置对象结构',
							type: 'error',
							duration:1500
					})
				}else{
					const parentWidgetListLen = props.parent?.options.advanced.cols[0].widgetList.length;
					if (props.ruleForm.length < parentWidgetListLen){
						if(props.widget.category === 'container'){
							props.ruleForm.push({
								[ruleFormKey]: {}
							})
						}else {
							props.ruleForm.push({
								[ruleFormKey]: props.widget.value
							})
						}
					}
				}
				childRuleForm.value = props.ruleForm.filter(rule=>Object.keys(rule).indexOf(ruleFormKey)>-1)[props.ruleForm.length-1][ruleFormKey]
			}
		}
	},
	{
		deep: true,
		immediate: true
	}
)

const widgetRuleFormKey = props.widget.ruleFormKey;
console.log(props.parent,"===props.parent===")
if(props.parent?.ruleFormKeyType === 'object'){
	childRuleForm.value = widgetRuleFormKey && props.ruleForm && props.ruleForm[widgetRuleFormKey];
}else if(props.parent?.ruleFormKeyType === 'array'){
	childRuleForm.value = widgetRuleFormKey && props.ruleForm && props.ruleForm.filter(rule=>Object.keys(rule).indexOf(widgetRuleFormKey)>-1)[props.ruleForm.length-1][widgetRuleFormKey]
}else {
	childRuleForm.value = props.ruleForm
}
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
	border: 1px dashed #444;
}
</style>