<template>
	<div class="input-container">
		<Mask
			:widget="widget"
            :isShow="isShow"
		>
			<el-input @focus="focus" @blur="blur" class="el_input"/>
		</Mask>
	</div>
</template>
<script setup>
import Mask from '../Mask.vue';
import {ref} from 'vue';
let props = defineProps(['widget']);
const isShow = ref(false);
const focus = () => {
    isShow.value = true;
};
const blur = () => {
	 isShow.value = false;
};
</script>
<style scoped>
.el_input{
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>