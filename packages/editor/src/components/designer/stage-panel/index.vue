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
				:label-width="formConfig['label-width']"
				:label-position="formConfig['label-position']"
				:rules="formConfig.rules"
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
								@click.stop="selected(widget)">
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

const componentMap = {
	...eleComponents
};

const _widgetStore = widgetStore();
const { widgetList,formConfig } = storeToRefs(_widgetStore);

const selected = (widgetData) => {
	console.log('选中:', widgetData);
	_widgetStore.selectedWidget = widgetData;
};

const onEnd = (origin)=>{
	_widgetStore.selectedWidget = _widgetStore.cloneWidget;
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
		text-align: center;
		line-height: 50px;
		background: #fff;
	}
	&-form {
		width: 100%;
		height: 90%;
		margin-top: 10px;
		background: #fff;
	}
}
.widget-form{
	height:100%;
}
</style>
