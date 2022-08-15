<template>
	<div class="tag-container">
		<div
			class="tag-content"
			ref="tagContent"
		>
			<span
				v-show="widget.options.basic.required"
				style="color:red"
			>*</span>
			{{widget.options.basic.label.value}}
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
let props = defineProps(['widget']);
const tagContent = ref(null);
// onMounted(() => {
// 	tagContent.value.style.width =
// 		props.widget.options.basic.labelWidth.value + 'px';
// 	tagContent.value.style.textAlign = props.widget.options.basic.labelAlign;
// 	const maskSlot = document.getElementsByClassName('mask-slot')[0];
// 	nextTick(() => {
// 		tagContent.value.style.height = maskSlot?.offsetHeight + 'px';
// 	});
// });
</script>
<style scoped>
.tag-container {
	float: left;
	padding-top: 5px;
}
</style>