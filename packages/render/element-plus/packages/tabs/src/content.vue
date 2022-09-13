<template>
    <el-col class="grid-content1 ep-bg-purple">
        <slot></slot>
        <!-- <draggable :list="colWidget.widgetList" item-key="id" v-bind="{group:'dragGroup', ghostClass: 'ghost',animation: 300}"
            tag="transition-group" :component-data="{name: 'fade'}"
            @add="onEnd1">
            <template #item="{ element }">
                <div class="transition-group-el">
                    <component 
                        :is="element.type" 
                        :key="element.id"
                        :parent-widget="colWidget.widgetList"
                        :widget = "element"
                        :parent="widget"
                        :prop-key = "getPropKey(element,colIdx)"
                        :rule-form = "ruleForm[colIdx]"
                        :selected-widget="selectedWidget"
                        :is-editor="isEditor"
                        @click.stop="selected1(element)">
                    </component>
                </div>
            </template>
        </draggable> -->
    </el-col>
</template>
<script setup>
    import { inject } from 'vue'
    const props = defineProps([
        'colWidget',
        'ruleForm',
        'widget',
        'propKey',
        'colIdx',
        'isEditor',
        'selectedWidget'
    ])
    const getPropKey = (element,index) =>{
        if(props.propKey) {
            return `${props.propKey}.${index}.${element.ruleFormKey}`
        }else{
            return `${element.ruleFormKey}`
        }
    }

    const onEnd = inject('onEnd')
    const onEnd1 = () =>{
        onEnd()
    }
    
    const selected = inject('selected')
    const selected1 = (element) =>{
        selected(element)
    }

</script>
 <style lang="scss" scoped>
 .grid-content1{
    min-height:34px;
    padding-bottom: 20px;
 }
 </style>