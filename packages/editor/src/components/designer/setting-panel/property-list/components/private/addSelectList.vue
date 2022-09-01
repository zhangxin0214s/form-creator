<template>
  <div class="advanced">
    <div class="operation">
      <div class="setOptions" v-if="!selectType">
        <span>动态数据：</span>
        <el-switch class="optionsType" v-model="optionsType"/>
      </div>
      <!-- 动态数据 -->
      <div v-if="optionsType">
        <dataSource :advanced-prop="advancedProp"/>
      </div>
      <!-- 城市数据 -->
      <div class="setOptions" v-if="!optionsType">
        <span>城市数据：</span>
        <el-switch v-model="selectType" @change="useOption" />
      </div>
      <!-- 静态数据 -->
      <el-form class="form" v-if="!selectType&&!optionsType">
        <el-form-item v-if="children.length>0">
          <select-node :list="children" :selectType="selectType"></select-node>
        </el-form-item>
    	</el-form>
    </div>
    <div class="addBtn" @click.native="addList" v-if="!selectType&&!optionsType">
      <el-button type="primary">添加选项</el-button>
    </div>
  </div>
</template>

<script setup>
  import { Delete, Plus, CirclePlusFilled } from '@element-plus/icons-vue'
  import { regionData } from 'element-china-area-data';
  import { ref } from 'vue';
  import dataSource from '../dataSource.vue'
  import selectNode from './selectNode.vue';

  const PROPS = defineProps(['advancedProp'])
  const optionsType = ref(false);
  const selectType = ref(false);
  let {children} = PROPS.advancedProp.selectConfig;
  const addList = () => {
    children.push({
      id: children.length,
      label: '选项',
      // label: `新选项${children.length}`,
      children: []
    })
  };
  const useOption = (bool) => {
    children.length=0;
    bool?children.push(...regionData):addList();
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
      .form {
        margin-top: 10px;
      }
    }
    .operation::-webkit-scrollbar {
      display: none;
    }
    .addBtn {
      height: 50px;
    }
  }
</style>
