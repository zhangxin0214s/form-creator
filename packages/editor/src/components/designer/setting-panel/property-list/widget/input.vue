<template>
    <div class="input-container">
        <el-collapse v-model="activeNames" class="input-collapse">
            <el-collapse-item name="1" title="基础属性">
                {{ selectedWidget }}
            </el-collapse-item>

            <el-collapse-item name="2" title="高级属性">

            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script setup>
import { ref } from "vue"
import { defineProps } from 'vue'
const selectedWidget = defineProps(['selectedWidget'])
const activeNames = ref(['1', '2', '3'])
</script>
<style lang="scss" scoped>
</style>