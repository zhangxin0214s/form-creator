<template>
	<div
		class="mask-container"
		ref="maskContainer"
	>
		<div
			class="mask-slot"
			ref="maskSlot"
		>
			<slot></slot>
			<div
				class="mask-content"
				ref="maskContent"
				@click="onClickMask"
			>
				<div class="title">
					{{ widget.options.basic.name.value }}
				</div>
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
const maskSlot = ref(null);
const maskContainer = ref(null);
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
	widgetList.value.splice(selectedMaskIndex.value, 1);
	nextTick(() => {
		selectedMaskIndex.value = widgetList.value.length - 1;
	});
};
const showMaskPublicFun = () => {
	nextTick(() => {
		maskContentDom = document.getElementsByClassName('mask-content');
		maskContentDom.forEach((el) => (el.style.opacity = 0));
		maskContentDom[selectedMaskIndex.value].style.opacity = 1;
		maskContainer.value.style.height = maskSlot.value.offsetHeight + 'px';
	});
};
</script>

<style scoped>
.mask-container {
	/* position: relative; */
	margin-bottom: 5px;
}
.mask-slot {
	position: absolute;
	display: flex;
}
.mask-content {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	border: 2px solid #1396da;
	border-radius: 5px;
	box-sizing: border-box;
}

.copyIcon {
	position: absolute;
	right: 30px;
	bottom: 0;
}
.deleteIcon {
	position: absolute;
	right: 0;
	bottom: 0;
}
.title {
	position: absolute;
	background-color: rgba(40, 173, 214, 0.7);
	left: 0;
	top: 0;
	color: white;
	font-size: 12px;
}
</style>