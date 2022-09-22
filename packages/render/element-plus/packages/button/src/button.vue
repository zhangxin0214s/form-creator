<template>
	<el-form-item
		:class="[selectedWidget?.id === widget?.id && isEditor?'select':'']"
		:label="widget.options.basic.label.value"
		:rules="widget.rules"
	>
		<el-button
			:icon="widget.options.advanced.value"
			:type="widget.options.basic.btnType.value"
			:disabled="widget.options.basic.disabled.value"
			:size="widget.options.basic.btnSize.value"
			:round="widget.options.advanced.btnRound.value"
			:circle="widget.options.advanced.btnCircle.value"
			:plain="widget.options.basic.plain.value"
			:auto-insert-space="widget.options.basic.space.value"
			@click="handleOnClick(props,inject,copy)"
		>{{ widget.options.basic.text.value }}
		</el-button>
	</el-form-item>
</template>
  
  <script>
export default {
	name: 'fcButton',
};
</script>
<script setup>
import { onMounted, onBeforeMount, inject } from 'vue';
import useRegisterEvent from '../../hooks/useRegisterEvent';
const copy = inject('copyWidget');
let props = defineProps(['widget', 'parentWidget', 'ruleFormRef', 'isEditor', 'selectedWidget']);
const { handleOnClick, handleOnBeforeMount, handleOnMounted } = useRegisterEvent();

/**
 * 渲染前
 */
onBeforeMount(() => {
	handleOnBeforeMount(props);
});

/**
 * 渲染后
 */
onMounted(() => {
	handleOnMounted(props);
});
</script>
  
<style lang="scss" scoped>
.hint {
	font-size: 12px;
	color: #9b9b9b;
}
// 选中样式
.select {
	outline: 1px solid $--color-primary;
}
</style>
