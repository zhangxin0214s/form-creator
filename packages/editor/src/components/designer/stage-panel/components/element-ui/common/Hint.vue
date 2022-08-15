<template>
	<div class="hint-container">
		<span
			class="hint"
			v-show="!widget.options.basic.hintHidden.isHidden"
		>{{ widget.options.basic.hint.label}}</span>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
let props = defineProps(['widget']);
</script>
<style scoped>
.hint {
	font-size: 12px;
    color: grey;
}
</style>
