<template>
    <div class="form">
        <el-form 
            class="form-renderer"
            :label-width="formConfig['label-width'].value"
            :label-position="formConfig['label-position'].value"
            :rules="formConfig.rules"
            >
        </el-form>
    </div>
</template>
<script setup>
    import { storeToRefs } from 'pinia';
    import { widgetStore } from '@/store/index';
    const _widgetStore = widgetStore();
    const { widgetList,formConfig } = storeToRefs(_widgetStore);
</script>
<style lang="scss" scoped>
    .form{
       &-renderer{
         height:100%;
       } 
    }
</style>