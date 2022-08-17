<template>
    <el-col 
        :span="colWidget.gutter" 
        class="grid-content1 ep-bg-purple" 
        :class="[isEditor?'gird-line':'']"
        >
            <draggable :list="colWidget.widgetList" item-key="id" v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300}"
                tag="transition-group" :component-data="{name: 'fade'}"
                @end="onEnd"
                :sort="isEditor">
                <template #item="{ element }">
                    <div class="transition-group-el">
                        <component 
                        :is="componentMap[element.type]" 
                        :key="element.id"
                        :widget = element
                        :parent-widget=colWidget.widgetList
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
    const { selectedWidget,widgetList,isEditor} = storeToRefs(_widgetStore);
    const selected = (widgetData) => {
        console.log('选中:', widgetData);
        _widgetStore.selectedWidget = widgetData;
    };
    const onEnd = () =>{
        console.log("结束")
    }
</script>
 <style lang="scss" scoped>
    .grid-content1{
        border-radius: 4px;
        min-height: 36px;
    }
    .gird-line{
        border:1px dashed #000;
    }
 </style>