<template>
    <el-row class="grid-container">
        
        <el-col :span="12" class="grid-content ep-bg-purple">
            <draggable :list="a" item-key="id" v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300}"
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

        <el-col :span="12" class="grid-content ep-bg-purple">
            <draggable :list="b" item-key="id" v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300}"
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
    </el-row>
</template>
<script setup>
    import { defineProps,ref } from 'vue'
    import * as widget from '../widget'
    import * as Advanced from '../Advanced'
    const props = defineProps([
        'widget'
    ])
    const componentMap = {
        ...widget,
        ...Advanced
    }
    const a = ref([])
    const b = ref([])
</script>
 <style lang="scss" scoped>
 .grid-container{
    border:1px dashed #444;
 }
 .el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  border:1px dashed #444;
}
 </style>