<template>
  <div class="history-list">
    <el-table :data="tableData" style="max-width: 920px" :header-cell-style="{'text-align':'center'}" :cell-style="{'text-align':'center'}">
      <el-table-column prop="compId" label="比赛名">
        <template v-slot="scope">
          <router-link :to="{path: '/history/detail/' + scope.row.compId}">{{scope.row.compId}}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="is_normal" label="是否是周赛" :formatter="formatter"/>
      <el-table-column prop="ongoing" label="是否正在进行" :formatter="formatter"/>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import {getCompetitionList} from "@/api/fetchData";
import {Result} from "@/types";
import {TableColumnCtx} from "element-plus";

const tableData = await getCompetitionList()

const formatter = (row: Result, column: TableColumnCtx<Result>) => {
  const val = row[column.property]
  return val?'是':'否'
}

</script>

<style scoped>
.history-list {
  display: flex;
  justify-content: center;
}

a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}

</style>
