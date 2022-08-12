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
		</div>
		<div
			class="mask-content"
			ref="maskContent"
			v-show="isShow"
		>
			<span>{{ props.widget.name }}</span>
			<svg-icon
				icon-class="copy"
				class="copyIcon"
			/>
			<svg-icon
				icon-class="delete"
				class="deleteIcon"
			/>
		</div>
	</div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps(['widget', 'isShow']);
const maskSlot = ref(null);
const maskContent = ref(null);
const maskContainer = ref(null);
onMounted(() => {
  maskContainer.value.style.height = maskSlot.value.clientHeight + 'px';
	maskContent.value.style.height = maskSlot.value.clientHeight-13 + 'px';
	maskContent.value.style.top = -maskSlot.value.clientHeight+5 + 'px';
});
</script>

<style>
.mask-content {
	position: relative;
	border: 2px solid firebrick;
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
</style>