<template>
	<div class="tag-container">

		<div
			class="tag-content"
			ref="tagContent"
		>
			<span v-show="widget.options.basic.required" style="color:red">*</span>
			{{widget.options.basic.label}}
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
let props = defineProps(['widget']);
const tagContent = ref(null);
onMounted(() => {
	tagContent.value.style.width = props.widget.options.basic.labelWidth + 'px';
	tagContent.value.style.textAlign = props.widget.options.basic.labelAlign;
});
</script>
<style scoped>
.tag-content {
	float: left;
}
</style>