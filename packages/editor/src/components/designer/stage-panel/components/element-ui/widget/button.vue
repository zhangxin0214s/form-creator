<template>
  <div>
    <el-button :type=btnInfo.type
        :disabled=btnInfo.disabled
    >{{ btnInfo.label }}
    </el-button>
  </div>
</template>

<script>
import { basicWidgets } from "../../../../widget-panel/widgetsConfig"
import { reactive } from "vue"

const state = reactive({
  basicWidgets:basicWidgets,
})
export default {
  name:"button",
  data() {
    return {
      list:state.basicWidgets,
      btnInfo:{
        name:'',
        label:'',
        type:'',
        disabled:'',
      },
    }
  },
  created() {
    let button = {}
    button = this.list.find(item => {
      return item.id === 4
    })
    this.btnInfo.name = button.options.basic.name
    this.btnInfo.label = button.options.basic.label
    this.btnInfo.type = button.options.basic.type
    this.btnInfo.disabled = button.options.basic.disabled
  }
}
</script>

<style scoped>

</style>
