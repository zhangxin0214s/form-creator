<template>
  <div class="advanced">
    <div class="operation">
      <div class="" v-for="(key,index) in dataListType">
        <span>{{PROPS.advancedProp[key]['label']}}：</span>
        <el-switch class="optionsType" v-model="PROPS.advancedProp[key]['check']" @change="changeDataType(key)"/>
      </div>
      <!-- 动态数据 -->
      <div v-if="PROPS.advancedProp['dataSource'].check">
        <dataSource :advanced-prop="advancedProp"/>
      </div>
      <!-- 静态数据 -->
      <el-form class="form" v-if="PROPS.advancedProp['staticData'].check">
        <el-form-item v-if="data.length>0">
          <select-node :data="data"></select-node>
        </el-form-item>
      </el-form>
      <div class="addBtn" @click.native="addList" v-if="PROPS.advancedProp['staticData'].check">
        <el-button type="primary">添加选项</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { Delete, Plus, CirclePlusFilled } from '@element-plus/icons-vue'
  import { regionData } from 'element-china-area-data';
  import { ref } from 'vue';
  import dataSource from '../dataSource.vue'
  import selectNode from './selectNode.vue';

  const PROPS = defineProps(['advancedProp']);
  const dataListType = ['dataSource', 'cityData', 'staticData'];
  const {data} = PROPS.advancedProp;

  const addList = () => {
    data.push({
      id: data.length,
      label: '选项',
      // label: `新选项${data.length}`,
      data: []
    })
  };
  const changeDataType = (key) => {
    data.length=0;
    dataListType.forEach(item => {
      if (item === key) {
        if (PROPS.advancedProp[item].check) {
          if (key==='cityData') data.push(...regionData);
          if (key==='staticData') addList();
        }
        return;
      }
      PROPS.advancedProp[item].check = false;
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
