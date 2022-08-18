<template>
    <el-col class="grid-content1 ep-bg-purple">
        <draggable :list="widgetList" item-key="id" v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300}"
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
    defineProps([
        'widgetList'
    ])
    const componentMap = {
        ...widgets,
        ...Advanced
    }
</script>
 <style lang="scss" scoped>
 .grid-content1{
    min-height:34px;
 }
 </style>