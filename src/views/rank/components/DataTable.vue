<template>
  <el-table :data="tableData" style="max-width: 920px;" border >
    <el-table-column prop="username" label="用户名" width="400"/>
    <el-table-column prop="avg" label="平均" v-if="aorb==='avg'" :formatter="formatter" width="260"/>
    <el-table-column prop="best" label="最佳" v-if="aorb==='best'" :formatter="formatter" width="260"/>
    <el-table-column prop="compId" label="比赛" width="260"/>
  </el-table>
</template>

<script lang="ts" setup>
import {TableColumnCtx} from "element-plus";
import {OmittedResultAvgWithCompId, OmittedResultBestWithCompId, Result} from "@/types";

const formatter = (row: Result, column: TableColumnCtx<Result>) => {
  const val = row[column.property]
  return val>0?val:'DNF'
}

defineProps<{
  tableData: OmittedResultAvgWithCompId[] | OmittedResultBestWithCompId[]
  aorb: string
}>()
</script>

<style scoped>

</style>
