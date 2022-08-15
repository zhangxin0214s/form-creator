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
            
            />
            <svg-icon
                icon-class="delete"
                class="deleteIcon"
               
            />
        </div>
    </div>
</template>
<script setup>
    import { widgetStore } from '@/store/index';
    import { storeToRefs } from 'pinia';
    defineProps(['widget']);
    const _widgetStore = widgetStore();
    const { selectedWidget} = storeToRefs(_widgetStore);
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