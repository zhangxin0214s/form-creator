<template>
  <el-form
		label-position="left"
		label-width="100px"
		:model="basicProp"
		style="max-width: 360px"
	>
		<el-form-item
			v-if="basicProp.list.label"
			:label="`${basicProp.list.label}:`"
      label-width="100px"
		>
      <div class="" v-for="item in LIST.options">
        <el-input
  				v-model="item.label"
  				:placeholder="item.label"
  			/>
        <el-button size="small" type="primary" circle :icon="Delete" @click.native="deleteList(item.value)" />
      </div>
		</el-form-item>
    <el-form-item @click.native="addList">
      <svg-icon icon-class="add"/>
      <span>添加选项</span>
    </el-form-item>
	</el-form>
</template>

<script setup>
  import { Delete } from '@element-plus/icons-vue'
  import { ref } from "vue"
  const PROPS = defineProps([
    'basicProp'
  ])
  const LIST = PROPS.basicProp.list;
  const addList = () => {
    let {options} = LIST;
    options.push({
      label: `新选项${options.length}`,
      value: options.length,
      checked: true, // 列表是否展示
      disabled: false, // 当前舞台列表是否禁用
    })
  }
  const deleteList = (id) => {
    let {options} = LIST,
        delIndex = options.findIndex(option=>option.value===id);
    options.splice(delIndex, 1);
    options.forEach((child,index) => child.value=index)
  }

</script>
