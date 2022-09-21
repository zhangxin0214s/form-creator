<template>

	<el-form
		class="form-renderer"
		:label-width="`${formJson.formConfig['label-width'].value}px`"
		:label-position="formJson.formConfig['label-position'].value"
		ref="ruleFormRef"
		:model="formJson.formConfig.ruleForm"
	>
		<div
			v-for="(widget, index) in formJson.widgetList"
			:key="index"
		>
			<!-- 非容器组件 -->
			<div v-if="widget.category === 'widget'">
				<widget-mask
					:widget="widget"
					:widget-list="formJson.widgetList"
					:form-config="formJson.formConfig"
					:rule-form-ref="ruleFormRef"
					:prop-key="widget.ruleFormKey"
					:rule-form="formJson.formConfig.ruleForm"
				/>
			</div>

			<!-- 容器类组件 -->
			<div v-if="widget.category === 'container'">
				<container-mask
					:widget="widget"
					:widget-list="formJson.widgetList"
					:form-config="formJson.formConfig"
					:rule-form-ref="ruleFormRef"
					:prop-key="widget.ruleFormKey"
					:rule-form="formJson.formConfig.ruleForm"
				/>
			</div>
		</div>
	</el-form>

</template>
<script>
import WidgetMask from './widgetMask.vue';
import ContainerMask from './containerMask.vue';
export default {
	name: 'FormRender',
	props: {},
	components: {
		WidgetMask,
		ContainerMask,
	},
	data() {
		return {
			ruleFormRef: null,
			formJson: {
				formConfig: {
					'label-position': {
						value: 'left',
						label: '标签对齐方式:',
						options: [
							{
								label: '左对齐',
								value: 'left',
							},
							{
								label: '向上对齐',
								value: 'top',
							},
							{
								label: '右对齐',
								value: 'right',
							},
						],
					}, // 标签位置
					'label-width': {
						label: '标签宽度',
						value: '100',
					}, // 标签宽度
					ruleForm: {
						111: [],
					}, // 提交数据
				},
				widgetList: [
					{
						id: 7,
						name: '文本域',
						type: 'fcTextarea',
						category: 'widget',
						icon: 'textField',
						value: null,
						ruleFormKey: null,
						rules: [],
						options: {
							basic: {
								name: {
									label: '唯一名称',
									value: '文本域',
								}, // 唯一名称
								label: {
									label: '标签',
									value: '内容:',
								}, // 标签
								type: 'textarea', // 类型
								defaultValue: {
									label: '默认文本',
									value: '请输入文本域内容',
								}, // 默认提示文本
								maxlength: {
									label: '最大输入长度',
									value: 50,
								},
								resizeDirection: {
									label: '缩放方向',
									options: [
										{
											label: '横向缩放',
											value: 'horizontal',
										},
										{
											label: '纵向缩放',
											value: 'vertical',
										},
										{
											label: '横纵双缩放',
											value: 'both',
										},
									],
									value: 'both',
								},
								ruleFormKey: {
									label: '参数key',
									value: '',
								},
								isHidden: {
									label: '隐藏组件',
									value: false,
								},
								required: {
									label: '是否必填',
									value: false,
									message: '',
								}, // 是否必填
								readonly: {
									label: '是否只读',
									value: false,
								}, // 只读
								disabled: {
									label: '是否禁用',
									value: false,
								}, // 禁用
							},
							advanced: {
								validation: {
									label: '校验规则',
									options: [
										{
											label: '无校验',
											value: '',
										},
										{
											label: '网址',
											value: '{"type":"url", "message":"请输入正确的网址", "trigger":"blur"}',
										},
										{
											label: 'Email地址',
											value: '{"type":"email", "message":"请输入正确的邮箱", "trigger":"blur"}',
										},
										{
											label: '岗位编码',
											value: '{"message":"只能输入数字英文", "pattern":"^[A-Za-z0-9]+$"}',
										},
										{
											label: '营业执照',
											value: '{"message":"请输入正确的营业执照", "pattern":"^[A-Z0-9]{8}-[A-Z0-9]$|^[A-Z0-9]{8}-[A-Z0-9]-[0-9]{2}$"}',
										},
										{
											label: '身份证号码',
											value: '{"message":"请正确输入您的身份证号码", "pattern":"^[1-9]\\\\d{5}[1-9]\\\\d{3}((0\\\\d)|(1[0-2]))(([0|1|2]\\\\d)|3[0-1])\\\\d{3}([0-9]|X|x)$"}',
										},
									],
									value: '',
									customValue: '',
									hintText:
										'注：请先填写参数key，再次选择校验规则，当前选择校验没有生效',
								},
								customWrongMessage: {
									label: '校验错误提示',
									value: '',
								},
								linkage: {
									label: '联动对象',
									options: [],
									value: [],
									targets: [],
								},
								linkageCode: {
									label: '联动代码',
									value: '//#region\n/*\nwidget:当前元素;\nlinkageObj:联动对象\ncopyWidget:复制方法\n*/ \n//#endregion ',
								},
							},
						},
					},
					{
						id: 8,
						name: '分割线',
						type: 'fcDivider',
						category: 'widget',
						icon: 'split',
						options: {
							basic: {
								name: {
									label: '唯一名称',
									value: '分割线',
								}, // 唯一名称
								label: {
									label: '',
									value: '',
								}, // 标签
								'divider-content': {
									label: '内容',
									value: '',
								},
								isHidden: {
									label: '隐藏组件',
									value: false,
								},
								'divider-direction': {
									label: '方向',
									options: [
										{
											label: '横向分割线',
											value: 'horizontal',
										},
										{
											label: '纵向分割线',
											value: 'vertical',
										},
									],
									value: 'horizontal',
								},
								'divider-style': {
									label: '样式',
									options: [
										{
											label: '实线',
											value: 'solid',
										},
										{
											label: '方格虚线',
											value: 'dashed',
										},
										{
											label: '圆点虚线',
											value: 'dotted',
										},
									],
									value: 'solid',
								},
								'divider-position': {
									label: '内容位置',
									options: [
										{
											label: '居左',
											value: 'left',
										},
										{
											label: '居中',
											value: 'center',
										},
										{
											label: '居右',
											value: 'right',
										},
									],
									value: 'center',
								},
								isMoveDivider: {
									label: '是否上下移动',
									value: false,
								},
								moveDistance: {
									label: '移动距离',
									value: 0,
								},
							},
							advanced: {
								linkage: {
									label: '联动对象',
									options: [],
									value: [],
									targets: [],
								},
								linkageCode: {
									label: '联动代码',
									value: '//#region\n/*\nwidget:当前元素;\nlinkageObj:联动对象\ncopyWidget:复制方法\n*/ \n//#endregion ',
								},
							},
						},
					},
					{
						id: 9,
						name: '手机号',
						type: 'fcCellPhone',
						category: 'widget',
						icon: 'cellPhone',
						value: null,
						ruleFormKey: null,
						rules: [
							{
								message: '请填写正确的手机号',
								pattern: '^(86|852|853)-1[3456789]\\d{9}$',
							},
						],
						options: {
							basic: {
								name: {
									label: '唯一名称',
									value: '手机号',
								}, // 唯一名称
								label: {
									label: '标签',
									value: '联系电话:',
								}, // 标签
								prefix: {
									options: [
										{
											label: '86',
											valueText: '大陆',
											value: '86',
										},
										{
											label: '852',
											valueText: '香港',
											value: '852',
										},
										{
											label: '853',
											valueText: '澳门',
											value: '853',
										},
									],
									value: '86',
								},
								type: 'number', // 类型
								defaultValue: {
									label: '默认文本',
									value: '请填写正确的手机号',
								}, // 默认提示文本
								ruleFormKey: {
									label: '参数key',
									value: '',
								},
								isHidden: {
									label: '隐藏组件',
									value: false,
								},
								required: {
									label: '是否必填',
									value: false,
									message: '',
								}, // 是否必填
								readonly: {
									label: '是否只读',
									value: false,
								}, // 只读
								disabled: {
									label: '是否禁用',
									value: false,
								}, // 禁用
							},
							advanced: {
								linkage: {
									label: '联动对象',
									options: [],
									value: [],
									targets: [],
								},
								linkageCode: {
									label: '联动代码',
									value: '//#region\n/*\nwidget:当前元素;\nlinkageObj:联动对象\ncopyWidget:复制方法\n*/ \n//#endregion ',
								},
							},
						},
					},
					{
						id: 10,
						name: '静态文本',
						type: 'fcStaticText',
						category: 'widget',
						icon: 'staticText',
						options: {
							basic: {
								name: {
									label: '唯一名称',
									value: '静态文本',
								}, // 唯一名称
								label: {
									label: '',
									value: '',
								}, // 标签

								isHidden: {
									label: '隐藏组件',
									value: false,
								},
								textareaDefaultValue: {
									label: '默认文本',
									value: '这是一段静态文本',
								}, // 默认文本
								'static-text-line-height': {
									label: '行高',
									value: 3,
								},
								'font-size': {
									label: '字体大小',
									value: 16,
								},
								'font-color': {
									label: '字体颜色',
									value: '#000000',
								},
								'font-style': {
									label: '字体样式',
									options: [
										{
											label: '加粗',
											value: false,
										},
										{
											label: '斜体',
											value: false,
										},
										{
											label: '下划线',
											value: false,
										},
									],
								},
								alignment: {
									value: 'left',
									label: '对齐方式',
									options: [
										{
											label: '左对齐',
											value: 'left',
										},
										{
											label: '居中对齐',
											value: 'center',
										},
										{
											label: '右对齐',
											value: 'right',
										},
									],
								},
								addRequired: {
									label: '添加必填符号',
									value: false,
								},
							},
							advanced: {
								linkage: {
									label: '联动对象',
									options: [],
									value: [],
									targets: [],
								},
								linkageCode: {
									label: '联动代码',
									value: '//#region\n/*\nwidget:当前元素;\nlinkageObj:联动对象\ncopyWidget:复制方法\n*/ \n//#endregion ',
								},
							},
						},
					},
				],
			},
		};
	},
};
</script>
<style scoped>
.form-renderer {
	padding: 10px;
}
</style>