<template>
  <div class="record-table">
    <el-table :data="tableData" style="max-width: 1024px" :header-cell-style="{'text-align':'center'}" :cell-style="{'text-align':'center'}" border>

      <el-table-column label="平均">
        <el-table-column prop="usernameAvg" label="用户名" />
        <el-table-column prop="avg" label="成绩" />
      </el-table-column>

      <el-table-column prop="event" label="项目" />

      <el-table-column prop="avg" label="单次">
        <el-table-column prop="best" label="成绩" />
        <el-table-column prop="usernameBest" label="用户名" />
      </el-table-column>

    </el-table>
  </div>
</template>

<script lang="ts" setup>
import {Record} from "@/types";
import {getScuRecord} from "@/api/fetchData";
import {computed} from "vue";

const record: Record = await getScuRecord()

interface integratedData {
  usernameAvg: string
  usernameBest: string
  avg: number
  best: number
  event: string
}

const tableData = computed(() => {
  const tableData: integratedData[] = []
  for (const i in record.avg) {
    let result_avg = record.avg[i]
    let result_best = record.best[i]
    let intData: integratedData = {
      usernameAvg: result_avg.username,
      usernameBest: result_best.username,
      avg: result_avg.avg,
      best: result_best.best,
      event: result_best.event
    }
    tableData.push(intData)
  }

  return tableData
})
</script>

<style scoped>
.record-table {
  display: flex;
  justify-content: center;
}
</style>
