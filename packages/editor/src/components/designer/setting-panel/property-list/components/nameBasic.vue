<template>
    <el-form
        label-position="left"
        label-width="100px"
        :model="widgetProp"
        style="max-width: 360px"
    >
        <el-form-item label="唯一名称:">
            <el-input  v-model="props.widgetProp[key]" />
        </el-form-item>
    </el-form>
</template>
<script setup>
    import { defineProps } from 'vue'
    const props = defineProps([
        'widgetProp',
        'key',
        'value'
    ])
</script>
<style lang="scss" scoped>
</style>