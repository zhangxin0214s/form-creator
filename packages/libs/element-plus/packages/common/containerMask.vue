<template>
    <div 
        class="container-mask">
        <slot></slot>
        <!-- <div class="container-mask-title" v-if="selectedWidget?.id === widget?.id">
            <span class="text">
                {{ widget.options.basic.name.value }}
			</span>
        </div> -->
        <div class="container-mask-action" v-if="selectedWidget?.id === widget?.id && isEditor">
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
    import { inject } from 'vue';
    const props = defineProps([
        'widget',
        'ruleForm',
        'parentWidget',
        'parent',
        'selectedWidget',
        'isEditor'
    ]);
    const emit = defineEmits(['copyWidget','removeWidget']);
    
    const copyWidget = inject("copyWidget")
    const copy = () =>{
        copyWidget(props.widget)
    }

    const removeWidget = inject("removeWidget")
    const delete1 = () =>{
      removeWidget(props.widget, props.parentWidget)
      props.widget.ruleFormKey && delete props.ruleForm[props.widget.ruleFormKey]
      if(props.parent?.ruleFormKeyType === 'array'){
            props.ruleForm.forEach((rule,index) =>{
                if(Object.keys(rule).indexOf(props.widget.ruleFormKey)>-1){
                    props.ruleForm.splice(index,1)
                }
            })
        }else{
            props.widget.ruleFormKey && delete props.ruleForm[props.widget.ruleFormKey]
        }
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
    .copyIcon:hover,.deleteIcon:hover {
        cursor: pointer;
    }
</style>
