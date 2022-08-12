<template>
	<div class="mask-container">
		<div
			class="mask-slot"
			ref="maskSlot"
		>
			<slot></slot>
		</div>
		<div
			class="mask-content"
			ref="maskContent"
			@click="onClickMask"
		>
			<span>{{ widget.name }}</span>
			<div
				class="hint"
				v-show="!widget.options.basic.hintHidden"
			>{{ widget.options.basic.hint}}</div>
			<svg-icon
				icon-class="copy"
				class="copyIcon"
				@click="onClickCopy"
			/>
			<svg-icon
				icon-class="delete"
				class="deleteIcon"
				@click="onClickDelete"
			/>

		</div>
	</div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
const _widgetStore = widgetStore();
const { widgetList, maskList } = storeToRefs(_widgetStore);
const props = defineProps(['widget']);
const maskSlot = ref(null);
const maskContent = ref(null);
onMounted(() => {
	maskSlot.value.style.width = props.widget.options.advanced.width + 'px';
	maskList.value.push(maskContent);
	maskList.value.forEach((mask) => {
		mask.value.style.opacity = 0;
	});
	maskContent.value.style.opacity = 1;
});
const onClickMask = () => {
	maskList.value.forEach((mask) => {
		mask.value.style.opacity = 0;
	});
	maskContent.value.style.opacity = 1;
};
const onClickCopy = () => {
	console.log('复制',);
	widgetList.value.push(props.widget);
};
const onClickDelete = () => {
	console.log('删除');
};
</script>

<style scoped>
.mask-container {
	position: relative;
	padding: 25px;
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