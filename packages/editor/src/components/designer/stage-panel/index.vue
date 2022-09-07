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
			<tool-bar/>
		</div>
		<div class="stage-form">
			<el-form
				class="widget-form"
				:label-width="formConfig['label-width'].value+'px'"
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
					@add="onEnd">
					<template #item="{ element: widget }">
						<div class="transition-group-el">
							<component
								:is="componentMap[widget.type]"
								:key="widget.id"
								:widget=widget
								:parent-widget="widgetList"
								:widget-type="`widget`"
								:prop-key="widget.ruleFormKey"
								:rule-form="formConfig.ruleForm"
								:rule-form-key-type="widget.ruleFormKeyType"
								:rule-form-ref="ruleFormRef"
								@click.stop="selected(widget)"
								@submitForm="submitForm"
								>
							</component>
						</div>
					</template>
				</draggable>
			</el-form>

		</div>
  </div>
</template>
<script setup>
import eleComponents from './components/element-ui';
import toolBar from '../toolbar-panel/index.vue'
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
import FormInstance  from 'element-plus';
import { reactive, ref } from 'vue'
const componentMap = {
	...eleComponents
};
const testdata = reactive({
	name:''
})

const rules = ref({
	name: [
		 { required: true, message: 'Please input Activity name', trigger: 'blur' }
	]
})
const _widgetStore = widgetStore();
const { widgetList,formConfig } = storeToRefs(_widgetStore);

const ruleFormRef = ref(null);

const selected = (widgetData) => {
	console.log('选中:', widgetData);
	_widgetStore.selectedWidget = widgetData;
};

const onEnd = (origin)=>{
  _widgetStore.selectedWidget = _widgetStore.cloneWidget;
  _widgetStore.recordHistory();
}

const submitForm = async () =>{
  if (!ruleFormRef) return
  await ruleFormRef.value.validate((valid, fields) => {
    console.log(valid,"===valid===")
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
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
    >.el-button {
      width: 100px;
      height: 40px;
      margin-bottom: 10px;
    }
  }
}
.widget-form{
	height:100%;
}
</style>
