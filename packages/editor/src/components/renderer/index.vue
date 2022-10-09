<template>
    <div class="form">
        <el-form
            class="form-renderer"
            :label-width="`${formConfig['label-width'].value}px`"
            :label-position="formConfig['label-position'].value"
            ref="ruleFormRef"
            :model="formConfig.ruleForm"
            >
            <template v-for="(widget, index) in widgetList" :key="index">
                <!-- 非容器组件 -->
                <template v-if="widget.category === 'widget' && !widget.options.basic.isHidden.value">
                  <widget-mask
                    :widget="widget"
                    :widget-list="widgetList"
                    :form-config="formConfig"
                    :rule-form-ref="ruleFormRef"
                    :prop-key="widget.ruleFormKey"
                    :rule-form="formConfig.ruleForm"
                  />
                </template>

                <!-- 容器类组件 -->
                <template v-if="widget.category === 'container' && !widget.options.basic.isHidden.value">
                  <container-mask
                    :widget="widget"
                    :widget-list="widgetList"
                    :form-config="formConfig"
                    :rule-form-ref="ruleFormRef"
                    :prop-key="widget.ruleFormKey"
                    :rule-form="formConfig.ruleForm"
                  />
                </template>
            </template>
        </el-form>
    </div>
</template>
<script setup>
    import { onMounted, onBeforeMount, ref } from 'vue';
    import widgetMask from './widgetMask.vue'
    import containerMask from './containerMask.vue'
    import { widgetStore } from '@/store/index';
    import { useRegisterEvent } from '../../../../render/element-plus/packages/index.js'
    const props = defineProps(['widgetList', 'formConfig', 'isEditor']);
    const ruleFormRef = ref(null);
    const submitForm = async () =>{
        if (!ruleFormRef) return
        await ruleFormRef.value.validate((valid, fields) => {
            console.log(valid,"===valid===")
            if (valid) {
            console.log('submit!')
            } else {
            console.log('error submit!', fields)
            }
        })
    }
    provide('widgetStore', widgetStore)

    const { handleOnBeforeMount, handleOnMounted } = useRegisterEvent({props});

    /**
     * 渲染前
     */
    onBeforeMount(() => {
      handleOnBeforeMount(props.formConfig.onBeforeMount.value);
    });

    /**
     * 渲染后
     */
    onMounted(() => {
      handleOnMounted(props.formConfig.onMounted.value);
    });
</script>
<style lang="scss" scoped>
    .form{
       &-renderer{
         height:100%;
       }
    }
</style>
