<template>
	<div class="input-container">
		<Mask :widget="widget">
			<Tag
				:widget="widget"
				v-if="!widget.options.basic.labelHidden.value"
			></Tag>
			<div class="input-content">
				<el-input
					:value="defaultValue"
					:disabled="widget.options.basic.disabled"
				/>
				<Hint :widget="widget"></Hint>
			</div>
		</Mask>
	</div>
</template>

<script setup>
import Mask from '../Mask.vue';
import Tag from '../Tag.vue';
import Hint from '../Hint.vue';
import { onMounted, ref } from 'vue';
let props = defineProps(['widget']);
let defaultValue = ref(props.widget.options.basic.defaultValue.value)
</script>
<style scoped>
.input-content{
	width: 100%;
}
</style>