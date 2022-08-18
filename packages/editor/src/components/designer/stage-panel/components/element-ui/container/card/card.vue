<template>
  <container-mask :widget="widget">
    <el-card type="border-card" :class="[selectedWidget?.id === widget?.id && isEditor?'select':'']" >
      <template #header>
      <div class="card-header">
        <span>{{widget.title}}</span>
      </div>
    </template>
    <card-content :widgetList="widget.options.advanced.widgetList"></card-content>
    </el-card>
  </container-mask>
</template>
<script setup>
  import { widgetStore } from '@/store/index';
  import { storeToRefs } from 'pinia';
  import containerMask from "../../common/containerMask.vue"
  import tabsContent from "./content.vue"
  const _widgetStore = widgetStore();
  const { selectedWidget,isEditor} = storeToRefs(_widgetStore);
  import cardContent from "./content.vue"
  const props=defineProps([
      'widget'
  ])
</script>
 <style lang="scss" scoped>
  .select {
    outline:1px solid $--color-primary;
 }
 .select {
    outline:1px solid $--color-primary;
 }
 </style>