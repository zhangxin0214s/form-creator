<template>
  <!-- 请求地址 -->
  <div class="address">
    <span class="address-text">请求地址:</span>
    <el-input
        v-model="advancedProp.dataSource.address"
        placeholder="https://****/"
    />
  </div>

  <!-- 请求方式 -->
  <div>
    <span class="type">请求方式:</span>
    <el-button-group class="ml-4">
      <el-button
          v-for="(item,index) in types"
          :class="advancedProp.dataSource.type == item ? 'activation':''"
          @click="advancedProp.dataSource.type = item"
          :key="index"
      >{{ item }}
      </el-button>
    </el-button-group>
  </div>

  <!-- 参数设置 -->
  <div class="parameter">
    <span class="parameter-text">参数设置:</span>
    <div class="parameter-inputs" v-for="(parameter,index) in parameters" :key="index">
      <el-input
          class="parameter-input1"
          v-model="parameter.key1"
          placeholder="key"
          @blur="setKey1(parameter.key1)"
      />
      <el-input
          class="parameter-input2"
          v-model="parameter.value1"
          placeholder="value"
          @blur="setValue1(parameter.key1,parameter.value1)"
      />
      <el-select
          v-model="parameterType"
          class="parameter-type"
          placeholder="Select"
          @change="setValue1(parameter.key1,parameter.value1)"
      >
        <el-option
            v-for="item in parameterTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
      <el-button
          circle
          class="parameter-del"
          size="small"
          style="float: right; margin-top: 5px;"
          type="primary"
          icon="el-icon-minus"
          @click="delParameter(index,parameter.key1)"
      />
    </div>
    <el-button
        class="parameter-add"
        circle
        type="primary"
        size="small"
        icon="el-icon-plus"
        @click="addParameter"
    />
  </div>

  <!-- <div class="data">
      <span class="data-text">发送数据:</span>
      <div  class="data-inputs" v-for="(data,index) in datas" :key="index">
          <el-input
              class="data-input1"
              v-model="data.key1"
          />
          <el-input
              class="data-input2"
              v-model="data.value1"
          />
          <el-button
              circle
              class="data-del"
              size="small"
              style="float: right; margin-top: 10px; margin-right: 20px"
              type="primary"
              icon="el-icon-minus"
              @click="delData(index)"
          />
      </div>
      <el-button
          class="parameter-add"
          circle
          type="primary"
          size="small"
          icon="el-icon-plus"
          @click="addData"
      />
  </div> -->
</template>
<script setup>
import { ref } from 'vue'

const props = defineProps([
  'advancedProp'
])
const types = ref(['post', 'get', 'put', 'delete'])

const parameterType = ref('String')
const parameterTypes = ref([
  {
    label:'字符串类型',
    value:'String'
  },
  {
    label:'数值类型',
    value:'Number'
  },
  {
    label:'布尔类型',
    value:'Boolen'
  }
])
const parameters = ref([
  {
    key1:'',
    value1:''
  }
])

const datas = ref([
  {
    key1:'',
    value1:''
  }
])

/**
 * 删除参数
 */
const delParameter = (index, key1) => {
  const _parameter = props.advancedProp.dataSource.parameter;
  delete _parameter[key1]
  parameters.value.splice(index, 1)
}

/**
 * 添加参数
 */
const addParameter = () => {
  parameters.value.push({
    key1:'',
    value1:''
  })
}

/**
 * 删除发送数据
 */
const delData = (index) => {
  datas.value.splice(index, 1)

}

/**
 * 添加参数
 */
const addData = () => {
  datas.value.push({
    key1:'',
    value1:''
  })
}

/**
 * 设置参数
 */
const setKey1 = (key1) => {
  const _parameter = props.advancedProp.dataSource.parameter;
  if (Object.keys(_parameter).indexOf(key1) === - 1) {
    _parameter[key1] = ''
  }

  const keys = parameters.value.map(item => {
    return item.key1
  })

  // 删除没有用的key
  Object.keys(_parameter).forEach(parameter => {
    if (keys.indexOf(parameter) === - 1) {
      delete _parameter[parameter]
    }
  })
}

/**
 * 设置value1
 */
const setValue1 = (key1, value1) => {
  if (!key1 || !value1) return
  const _parameter = props.advancedProp.dataSource.parameter;
  if (parameterType.value === 'String') {
    _parameter[key1] = value1
  } else if (parameterType.value === 'Number') {
    _parameter[key1] = value1 * 1
  } else if (parameterType.value === 'Boolen') {
    _parameter[key1] = value1 === 'true'
  }

}
</script>
<style lang="scss" scoped>
.activation {
  color: #4093ff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

.address {
  margin-bottom: 20px;

  &-text {
    display: inline-block;
    margin-bottom: 10px;
  }
}

.type {
  display: inline-block;
  margin-bottom: 10px;
}

.parameter {
  margin-top: 20px;
  margin-bottom: 20px;

  &-text {
    display: inline-block;
    margin-bottom: 10px;
  }

  &-inputs {
    margin-bottom: 10px;
  }

  &-input1 {
    width: 60px;
  }

  &-input2 {
    width: 60px;
    margin-left: 5px;
  }

  &-add {
    margin-top: 20px;
  }

  &-type {
    width: 110px;
  }
}

.data {
  margin-top: 20px;
  margin-bottom: 20px;

  &-text {
    display: inline-block;
    margin-bottom: 10px;
  }

  &-inputs {
    margin-bottom: 10px;
  }

  &-input {
    width: 90px;
    margin-left: 10px;
  }

  &-add {
    margin-top: 20px;
  }
}
</style>
