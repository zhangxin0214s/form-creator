<template>
    <div class="container-mask">
        <slot></slot>
        <div class="container-mask-title" v-if="selectedWidget?.id === widget?.id">
            <span class="text">
                {{ widget.options.basic.name.value }}
			</span>
        </div>
        <div class="container-mask-action" v-if="selectedWidget?.id === widget?.id">
            <svg-icon
                icon-class="copy"
                class="copyIcon"
                @click.stop="copy"
            />
            <svg-icon
                icon-class="delete"
                class="deleteIcon"
                @click.stop="delete1"
            />
        </div>
    </div>
</template>
<script setup>
    import { widgetStore } from '@/store/index';
    import { storeToRefs } from 'pinia';
    import { generateId,deepClone } from '@/utils/util'
    const props = defineProps(['widget']);
    const _widgetStore = widgetStore();
    const { widgetList,selectedWidget} = storeToRefs(_widgetStore);

    const copy = () =>{
        let newOrigin = deepClone(props.widget);
        newOrigin.id = generateId();
        _widgetStore.widgetList.push(newOrigin)
    }

    const delete1 = () =>{
         _widgetStore.widgetList.splice(selectedWidget,1);
       
    }

</script>
<style lang="scss" scoped>
    .container-mask{
        position:relative;
        margin-bottom:2px;
        &-title{
            position: absolute;
            top: -2px;
            //bottom: -24px;  /* 拖拽手柄位于组件下方，有时无法正常拖动，原因未明？？ */
            left: -2px;
            height: 22px;
            line-height: 22px;
            background: $--color-primary;
            z-index: 9;
            .text{
                font-size: 14px;
                font-style: normal;
                color: #fff;
                margin: 4px;
                cursor: move;
            }
        }

        &-action{
            position: absolute;
            bottom: 0;
            right: -2px;
            height: 23px;
            line-height: 28px;
            background: $--color-primary;
            z-index: 999;
        }
        
    }
</style>