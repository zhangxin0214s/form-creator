/**
* author: zhangxin0214
* email: zhangxin0214@tal.com
* date: 2022.08.01
*/
<template>
	<div class="stage-container">
		<div
			class="stage-hint"
			v-if="widgetList.length === 0"
		>
			请从左侧选择一个组件，拖拽添加至此处
		</div>
		<div class="stage-toolbar">
			<tool-bar />
		</div>
		<div class="stage-form">
			<el-form
				class="widget-form"
				:label-width="`${formConfig['label-width'].value}px`"
				:label-position="formConfig['label-position'].value"
				ref="ruleFormRef"
				:model="formConfig.ruleForm"
			>
				<draggable
					v-if="widgetList"
					:list="widgetList"
					item-key="id"
					v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300,}"
					tag="transition-group"
					@add="onEnd"
				>
					<template #item="{ element: widget }">
						<div class="transition-group-el">
							<!-- 非容器组件 -->
							<template v-if="widget.category === 'widget'">
								<widget-mask
									:widget="widget"
									:widget-list="widgetList"
									:selected-widget="selectedWidget"
									:is-editor="isEditor"
									:form-config="formConfig"
									:rule-form-ref="ruleFormRef"
									:prop-key="widget.ruleFormKey"
									:rule-form="formConfig.ruleForm"
								/>
							</template>

							<!-- 容器类组件 -->
							<template v-if="widget.category === 'container'">
								<container-mask
									:widget="widget"
									:widget-list="widgetList"
									:selected-widget="selectedWidget"
									:is-editor="isEditor"
									:form-config="formConfig"
									:rule-form-ref="ruleFormRef"
									:prop-key="widget.ruleFormKey"
									:rule-form="formConfig.ruleForm"
								/>
							</template>
						</div>
					</template>
				</draggable>
			</el-form>
		</div>
	</div>
</template>
<script setup>
import FormInstance from 'element-plus';
import { ref, provide, watch, reactive } from 'vue';
import toolBar from '../toolbar-panel/index.vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
import widgetMask from './widgetMask.vue';
import containerMask from './containerMask.vue';
import {
	keepFormDataLocal,
	getLocalValue,
} from '../../../../../libs/element-plus/packages/hooks/recordLocalStorage';

const _widgetStore = widgetStore();
const {
	widgetList,
	formConfig,
	pointer,
	historyList,
	isEditor,
	selectedWidget,
} = storeToRefs(_widgetStore);

const ruleFormRef = ref(null);

const widgetList_history = getLocalValue('widgetList_history');
if (widgetList_history) {
	widgetList.value = widgetList_history;
	historyList.value.push([...widgetList.value]);
	pointer.value = 1;
}
const formConfig_history = getLocalValue('formConfig_history');
formConfig_history && (formConfig.value = formConfig_history);
keepFormDataLocal(watch, formConfig.value, widgetList.value);

provide('widgetStore', widgetStore);
/**
 * 点击选中
 */
const selected = (widgetData) => {
	console.log('选中:', widgetData);
	_widgetStore.selectedWidget = widgetData;
};
provide('selected', selected);

/**
 * 拖拽结束
 */
const onEnd = () => {
	_widgetStore.selectedWidget = _widgetStore.cloneWidget;
	_widgetStore.recordHistory();
};
provide('onEnd', onEnd);

/**
 * 复制组件
 */
const copyWidget = ({ widget, parentWidget }) => {
	_widgetStore.copyWidget({ target: widget, parentWidget });
};
provide('copyWidget', copyWidget);

/**
 * 删除组件
 */
const removeWidget = ({ widget, parentWidget, parent, ruleForm }) => {
	_widgetStore.removeWidget({ currentWidget: widget, parentWidget });
	if (parent?.ruleFormKeyType === 'array') {
		for (let i = 0; i < ruleForm.length; i++) {
			if (Object.keys(ruleForm[i]).indexOf(widget.ruleFormKey) > -1) {
				ruleForm.splice(i, 1);
				break;
			}
		}
	} else {
		widget.ruleFormKey && ruleForm && delete ruleForm[widget.ruleFormKey];
	}
};
provide('removeWidget', removeWidget);

/**
 * 提交
 */
const submitForm = async () => {
	if (!ruleFormRef) return;
	await ruleFormRef.value.validate((valid, fields) => {
		console.log(valid, '===valid===');
		if (valid) {
			console.log('submit!');
		} else {
			console.log('error submit!', fields);
		}
	});
};
provide('submitForm', submitForm);
</script>
<style lang="scss" scoped>
.stage {
	&-container {
		width: 100%;
		height: 100%;
		padding: 0 10px 0 10px;
		background: #f1f2f3;
		overflow-x: hidden;
		overflow-y: auto;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	&-hint {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		color: #444;
	}

	&-toolbar {
		height: 50px;
		background: #fff;
	}

	&-form {
		width: 100%;
		height: 90%;
		flex: 1;
		margin-top: 10px;
		background: #fff;
	}

	&-button {
		position: absolute;
		right: 10px;
		bottom: 0;
		display: flex;

		> .el-button {
			width: 100px;
			height: 40px;
			margin-bottom: 10px;
		}
	}
}

.widget-form {
	overflow-x: hidden;
	overflow-y: scroll;
	height: calc(100vh - 170px);
}

/* 隐藏滚动条 */
::-webkit-scrollbar {
	display: none;
}

// 选中样式
.select {
	border: 1px solid $--color-primary;
}

// 遮罩样式
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
.copyIcon:hover,
.deleteIcon:hover {
	cursor: pointer;
}
</style>
