<template>
    <el-form
        label-position="left"
        label-width="100px"
        :model="basicProp"
        style="max-width: 360px"
    >
        <el-form-item v-if="basicProp && basicProp[key1]?.label" :label="`${basicProp[key1]?.label}:`">
            <el-input  v-model="input" />
        </el-form-item>
    </el-form>
</template>
<script setup>
    import { ref,defineProps } from 'vue'
    const props = defineProps([
        'basicProp',
        'key1',
        'value'
    ])
    const input = ref(props.basicProp[props.key1]?.value);
</script>
<style lang="scss" scoped>
</style>