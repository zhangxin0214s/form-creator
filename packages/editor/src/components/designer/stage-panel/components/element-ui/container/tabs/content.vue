<template>
    <el-col class="grid-content1 ep-bg-purple">
        <draggable :list="colWidget.widgetList" item-key="id" v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300}"
            tag="transition-group" :component-data="{name: 'fade'}">
            <template #item="{ element }">
                <div class="transition-group-el">
                    <component 
                    :is="componentMap[element.type]" 
                    :key="element.id"
                    :widget = element
                    >
                    </component>
                </div>
            </template>
        </draggable>
    </el-col>
</template>
<script setup>
    import eleComponents from '../../index.js';
    defineProps([
        'colWidget'
    ])
    const componentMap = {
        ...eleComponents
    }
</script>
 <style lang="scss" scoped>
 .grid-content1{
    min-height:34px;
    padding-bottom: 20px;
 }
 </style>