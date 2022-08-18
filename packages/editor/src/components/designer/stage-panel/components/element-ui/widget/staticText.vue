<template>
	<widget-mask
		:widget="widget"
		:basic-prop="widget.options.basic"
		:advanced-prop="widget.options.advanced"
		:parent-widget="parentWidget"
    class="widgetMask"
	>
		<pre style="line-height:1;margin: inherit;">
     {{widget.options.basic.textareaDefaultValue.value}}
    </pre>
	</widget-mask>
</template>

<script setup>
import { watch } from 'vue';
import widgetMask from '../common/widgetMask.vue';
defineProps(['widget', 'parentWidget']);
</script>
<style scoped>

</style>