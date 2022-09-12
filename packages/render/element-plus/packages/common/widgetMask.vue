<template>
	<div
		class="container-mask"
	>
		<el-form-item
			:class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
			:label="basicProp.label.value"
			:rules="widget.rules"
			:prop="propKey"
			:key="propKey"
		>
			<slot></slot>
		</el-form-item>

		<!-- <div class="container-mask-title" v-if="selectedWidget?.id === widget?.id">
            <span class="text">
                {{ widget.options.basic.name.value }}
			</span>
        </div> -->
		
		<div
			class="container-mask-action"
			v-if="selectedWidget?.id === widget?.id && isEditor"
		>
			<svg-icon
				icon-class="copy"
				class="copyIcon"
				@click.stop="copy"
			/>
			<svg-icon
				icon-class="delete"
				class="deleteIcon"
				@click.stop="delete1"
			/>
		</div>
	</div>
</template>
<script setup>
import { inject } from 'vue';
const props = defineProps(['widget', 'copyWidget','isEditor', 'selectedWidget', 'basicProp', 'parent', 'ruleForm','propKey','parentWidget']);

const copyWidget = inject("copyWidget")
const copy = () => {
	copyWidget(props.widget)
};

const removeWidget = inject("removeWidget")
const delete1 = () => {
	removeWidget(props.widget, props.parentWidget)
	if(props.parent?.ruleFormKeyType === 'array'){
		props.ruleForm.forEach((rule,index) =>{
			if(Object.keys(rule).indexOf(props.widget.ruleFormKey)>-1){
				props.ruleForm.splice(index,1)
			}
		})
	}else{
		props.widget.ruleFormKey && delete props.ruleForm[props.widget.ruleFormKey]
	}
};

const getPropName = () => {
	return props.basicProp?.ruleFormKey?.value
}
</script>
<style lang="scss" scoped>
.select {
	outline: 1px solid $--color-primary;
}

.container-mask {
	position: relative;
	margin-bottom: 2px;
	&-action {
		position: absolute;
		bottom: 0;
		right: -2px;
		height: 23px;
		line-height: 28px;
		background: $--color-primary;
		z-index: 999;
	}
}
.copyIcon:hover,.deleteIcon:hover {
	cursor: pointer;
}
</style>
