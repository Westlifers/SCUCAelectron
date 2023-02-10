<template>
  <el-table :data="tableData" style="max-width: 920px" max-height="750" border >
    <el-table-column fixed prop="username" label="用户名" width="200"/>
    <el-table-column prop="time_1" label="第一次" :formatter="formatter" width="120"/>
    <el-table-column prop="time_2" label="第二次" :formatter="formatter" width="120"/>
    <el-table-column prop="time_3" label="第三次" :formatter="formatter" width="120"/>
    <el-table-column prop="time_4" label="第四次" :formatter="formatter" width="120"/>
    <el-table-column prop="time_5" label="第五次" :formatter="formatter" width="120"/>
    <el-table-column prop="avg" label="平均" :formatter="formatter" width="120"/>
    <el-table-column prop="best" label="最佳" :formatter="formatter" width="120"/>
  </el-table>
</template>

<script lang="ts" setup>
import {TableColumnCtx} from "element-plus";
import {Result} from "@/types";


const formatter = (row: Result, column: TableColumnCtx<Result>) => {
  const val = row[column.property]
  return val>0?val:'DNF'
}

defineProps<{
  tableData: Result[]
}>()
</script>

<style scoped>

</style>
