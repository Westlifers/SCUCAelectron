<template>
  <el-table :data="tableData" style="max-width: 920px" max-height="250" border >
    <el-table-column fixed prop="username" label="用户名" width="200"/>
    <el-table-column prop="time1" label="第一次" :formatter="formatter" width="120"/>
    <el-table-column prop="time2" label="第二次" :formatter="formatter" width="120"/>
    <el-table-column prop="time3" label="第三次" :formatter="formatter" width="120"/>
    <el-table-column prop="time4" label="第四次" :formatter="formatter" width="120"/>
    <el-table-column prop="time5" label="第五次" :formatter="formatter" width="120"/>
    <el-table-column prop="avg" label="平均" :formatter="formatter" width="120"/>
  </el-table>
</template>

<script lang="ts" setup>
import {TableColumnCtx} from "element-plus";

interface UserResult {
  username: string,
  time1: number,
  time2: number,
  time3: number,
  time4: number,
  time5: number,
  avg: number
}

const formatter = (row: UserResult, column: TableColumnCtx<UserResult>) => {
  const val = row[column.property]
  return val>0?val:'DNF'
}

defineProps<{
  tableData: UserResult[]
}>()
</script>

<style scoped>

</style>
