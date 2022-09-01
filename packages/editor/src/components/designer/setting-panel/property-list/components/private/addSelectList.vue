<template>
  <div class="advanced">
    <div class="operation">
      <!-- 动态数据 -->
      <div class="setOptions">
        <span>动态数据：</span>
        <el-switch class="optionsType" v-model="switchData[0]" @change="changeData(0)"/>
      </div>
      <div v-if="switchData[0]">
        <dataSource :advanced-prop="advancedProp"/>
      </div>
      <!-- 城市数据 -->
      <div class="setOptions">
        <span>城市数据：</span>
        <el-switch v-model="switchData[1]" @change="changeData(1)" />
      </div>
      <!-- 静态数据 自定义 -->
      <div class="customData">
        <span>静态数据：</span>
        <el-switch v-model="switchData[2]" @change="changeData(2)" />
      </div>
      <el-form class="form" v-if="switchData[2]">
        <el-form-item v-if="children.length>0">
          <select-node :list="children"></select-node>
        </el-form-item>
    	</el-form>
    </div>
    <div class="addBtn" @click.native="addList" v-if="switchData[2]">
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
  let {children} = PROPS.advancedProp.selectConfig;
  let switchData = ref([false, false, false]);
  const addList = () => {
    children.push({
      id: children.length,
      label: '选项',
      // label: `新选项${children.length}`,
      children: []
    })
  };
  const changeData = (num) => {
    children.length=0;
    switchData.value.forEach((bool,index) => {
      if (index === num) {
        if (bool) {
          if (index===1) children.push(...regionData);
          if (index===2) addList();
        }
        return;
      }
      switchData.value[index] = false;
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
