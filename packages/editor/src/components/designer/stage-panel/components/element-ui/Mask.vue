<template>
	<div class="mask-container">
		<div
			class="mask-slot"
		>
			<slot></slot>
		</div>
		<div
			class="mask-content"
			ref="maskContent"
			@click="onClickMask"
		>
			<span>{{ widget.options.basic.name.value }}</span>
			<div
				class="hint"
				v-show="!widget.options.basic.hintHidden"
			>{{ widget.options.basic.hint}}</div>
			<svg-icon
				icon-class="copy"
				class="copyIcon"
				@click.stop="onClickCopy"
			/>
			<svg-icon
				icon-class="delete"
				class="deleteIcon"
				@click.stop="onClickDelete"
			/>

		</div>
	</div>
</template>
<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
const _widgetStore = widgetStore();
const { widgetList, selectedMaskIndex } = storeToRefs(_widgetStore);
const props = defineProps(['widget']);
const maskContent = ref(null);
let maskContentDom = null;
onMounted(() => {
	showMaskPublicFun();
});
watch(selectedMaskIndex, () => {
	showMaskPublicFun();
});
const onClickMask = () => {
	maskContentDom.forEach((el) => (el.style.opacity = 0));
	maskContent.value.style.opacity = 1;
	selectedMaskIndex.value = Array.from(maskContentDom).findIndex(
		(el) => el.style.opacity === '1'
	);
};
const onClickCopy = () => {
	widgetList.value.splice(selectedMaskIndex.value, 0, props.widget);
	nextTick(() => {
		selectedMaskIndex.value = selectedMaskIndex.value + 1;
	});
};
const onClickDelete = (e) => {
	console.log('删除', e);
	widgetList.value.splice(selectedMaskIndex.value,1);
	nextTick(() => {
		selectedMaskIndex.value = widgetList.value.length-1;
	});
};
const showMaskPublicFun = () => {
	maskContentDom = document.getElementsByClassName('mask-content');
	maskContentDom.forEach((el) => (el.style.opacity = 0));
	maskContentDom[selectedMaskIndex.value].style.opacity = 1;
};
</script>

<style scoped>
.mask-container {
	position: relative;
	padding-top: 25px;
	padding-left: 10px;
	padding-bottom: 25px;
	margin-bottom: 5px;
}
.mask-content {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	border: 2px solid #1396da;
	border-radius: 5px;
}

.copyIcon {
	position: absolute;
	right: 30px;
	bottom: 5px;
}
.deleteIcon {
	position: absolute;
	right: 0;
	bottom: 5px;
}
span {
	font-size: 12px;
}
.hint {
	position: absolute;
	left: 5px;
	bottom: 5px;
	font-size: 12px;
}
</style>