<template>
	<el-form
		class="form-renderer"
		:label-width="`${formConfig['label-width'].value}px`"
		label-position="right"
		ref="ruleFormRef"
		:model="formConfig.ruleForm"
	>
		<div
			v-for="(widget, index) in widgetList"
			:key="index"
		>
			<!-- 非容器组件 -->
			<div v-if="widget.category === 'widget'  && !widget.options.basic.isHidden.value">
				<widget-mask
					:widget="widget"
					:widget-list="widgetList"
					:form-config="formConfig"
					:rule-form-ref="ruleFormRef1"
					:prop-key="widget.ruleFormKey"
					:rule-form="formConfig.ruleForm"
					:widget-store="widgetStore"
        			:request="request"
				/>
			</div>

			<!-- 容器类组件 -->
			<div v-if="widget.category === 'container' && !widget.options.basic.isHidden.value">
				<container-mask
					:widget="widget"
					:widget-list="widgetList"
					:form-config="formConfig"
					:rule-form-ref="ruleFormRef1"
					:prop-key="widget.ruleFormKey"
					:rule-form="formConfig.ruleForm"
					:widget-store="widgetStore"
        			:request="request"
				/>
			</div>
		</div>
	</el-form>

</template>
<script>
import WidgetMask from './widgetMask.vue';
import ContainerMask from './containerMask.vue';
export default {
	name: 'fcRenderer',
	props: {
		widgetList: Array,
		formConfig: Object,
		isEditor: Boolean,
		widgetStore: Object,
		request: Object
	},
	components: {
		WidgetMask,
		ContainerMask,
	},
	mounted(){
		this.ruleFormRef1 = this.$refs.ruleFormRef;
	},
	data() {
		return {
			ruleFormRef: null,
      		ruleFormRef1:null,
			formJson: {},
		};
	},
};
</script>
<style scoped>
.form-renderer {
  padding: 10px;
}
</style>
