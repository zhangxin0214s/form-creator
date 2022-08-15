<template>
    <el-col 
        :span="colWidget.gutter" 
        class="grid-content ep-bg-purple" 
        >
            <draggable :list="colWidget.widgetList" item-key="id" v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300}"
                tag="transition-group" :component-data="{name: 'fade'}">
                <template #item="{ element }">
                    <div class="transition-group-el" @click="selected(widget)">
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
    import * as widgets from '../../widget'
    import * as Advanced from '../../Advanced'
    import { widgetStore } from '@/store/index';
    import { storeToRefs } from 'pinia';
    defineProps([
        'colWidget',
        'widget'
    ])
    const componentMap = {
        ...widgets,
        ...Advanced
    }
    const _widgetStore = widgetStore();
    const { selectedWidget} = storeToRefs(_widgetStore);
    const selected = (widgetData) => {
        console.log('选中:', widgetData);
        _widgetStore.selectedWidget = widgetData;
    };
</script>
 <style lang="scss" scoped>
 </style>