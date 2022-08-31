<template>
  <div class="advanced">
    <div class="operation">
      <div class="setOptions">
        <span>动态数据:</span>
        <el-switch class="optionsType" v-model="optionsType"/>
      </div>
      <!-- 动态数据 -->
      <div v-if="optionsType">
        <dataSource :advanced-prop="advancedProp"/>
      </div>
      <!-- 静态数据 -->
      <el-form>
        <el-form-item v-if="children.length>0">
          <select-node :list="children"></select-node>
        </el-form-item>
    	</el-form>
    </div>
    <div class="addBtn" @click.native="addList">
      <el-icon :size="30" color="#1296db"><CirclePlusFilled /></el-icon>
    </div>
  </div>
</template>

<script setup>
  import { Delete, Plus, CirclePlusFilled } from '@element-plus/icons-vue'
  import { ref } from 'vue';
  import dataSource from '../dataSource.vue'
  import selectNode from './selectNode.vue';

  const PROPS = defineProps(['advancedProp'])
  const optionsType = ref(false)
  const {children} = PROPS.advancedProp.selectConfig;
  const addList = () => {
    children.push({
      id: children.length,
      label: '选项',
      // label: `新选项${children.length}`,
      children: []
    })
  }

</script>

<style lang="scss" scoped>
  .advanced {
    height: 88%;
    display: flex;
    flex-direction: column;
    .operation {
      flex: 1;
      overflow-y: scroll;
    }
    .addBtn {
      height: 50px;
    }
  }
</style>
