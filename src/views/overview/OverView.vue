<template>
  <el-tabs v-model="activeName" class="demo-tabs" type="card">
    <el-tab-pane v-for="(event, key) in events" :key="key" :name="event" :label="event">
      <DataTable :table-data="tableData[event]"></DataTable>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DataTable from "@/views/overview/components/DataTable.vue";
const activeName = ref('first')

const events = ['222', '333', '444', '555', '666', '777', 'SQ1', 'Py', '333OH']

interface UserResult {
  username: string,
  time1: number,
  time2: number,
  time3: number,
  time4: number,
  time5: number,
  avg: number
}







// 测试数据
const tableData: {[key:string]:UserResult[]} = {
  '333': [
    {
      username: '孟一凡',
      time1: 1,
      time2: 1,
      time3: 1,
      time4: 1,
      time5: 0,
      avg: 1
    },
  ],
  '444': [
    {
      username: '孟一凡',
      time1: 12.21,
      time2: 17.95,
      time3: 100,
      time4: -1,
      time5: 0,
      avg: 1
    },
  ]
}
</script>

<style scoped>
.demo-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
