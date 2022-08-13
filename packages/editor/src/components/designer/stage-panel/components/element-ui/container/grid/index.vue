<template>
    <el-row class="grid-container">
        <template v-for="(colWidget, colIdx) in widget.options.advanced.cols" :key="colIdx">
            <Col 
                :colWidget="colWidget"
            >
            </Col>
        </template>  
    </el-row>
</template>
<script setup>
    import Col from "./grid-col.vue"
    import { defineProps } from 'vue'
    defineProps([
        'widget'
    ])
</script>
 <style lang="scss" scoped>
 .grid-container{
    border:1px dashed #444;
 }
 .el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  border:1px dashed #444;
}
 </style>