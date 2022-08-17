<template>
  <el-form
		label-position="left"
		label-width="100px"
		:model="advancedProp"
		style="max-width: 360px"
	>
		<el-form-item
			v-if="advancedProp.selectConfig.label"
			:label="`${advancedProp.selectConfig.label}:`"
      label-width="100px"
		>
      <div class="" v-for="item in LIST.lists">
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
  const PROPS = defineProps([
    'advancedProp'
  ])
  const LIST = PROPS.advancedProp.selectConfig;
  const addList = () => {
    let {lists} = LIST;
    lists.push({
      label: `新选项${lists.length}`,
      value: lists.length,
      checked: true, // 列表是否展示
      disabled: false, // 当前舞台列表是否禁用
    })
  }
  const deleteList = (id) => {
    let {lists} = LIST,
        delIndex = lists.findIndex(option=>option.value===id);
    lists.splice(delIndex, 1);
    lists.forEach((child,index) => child.value=index)
  }

</script>
