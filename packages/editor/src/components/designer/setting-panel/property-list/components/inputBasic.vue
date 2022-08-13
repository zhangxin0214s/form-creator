<template>
    <el-form
        label-position="left"
        label-width="100px"
        :model="widgetProp"
        style="max-width: 360px"
    >
        <el-form-item v-if="widgetProp[key1]?.label" :label="`${widgetProp[key1]?.label}:`">
            <el-input  :model="widgetProp[key1]?.value" />
        </el-form-item>
    </el-form>
</template>
<script setup>
    import { defineProps } from 'vue'
    defineProps([
        'widgetProp',
        'key1',
        'value'
    ])
</script>
<style lang="scss" scoped>
</style>