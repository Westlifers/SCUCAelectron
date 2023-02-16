<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">

    <el-button type="danger" icon="MoreFilled" @click="isCollapse=!isCollapse" circle />


    <el-sub-menu index="1">
      <template #title>
        <el-icon><Bicycle /></el-icon>
        <span>本周赛事</span>
      </template>

      <el-menu-item index="1-1" @click="go_page('overview')">
        <el-icon><TrendCharts /></el-icon>
        <template #title>成绩总览</template>
      </el-menu-item>

      <el-menu-item index="1-2" @click="go_page('cubing')" disabled>
        <el-icon><Grid /></el-icon>
        <template #title>进行复原</template>
      </el-menu-item>

    </el-sub-menu>


    <el-sub-menu index="2">
      <template #title>
        <el-icon><Opportunity /></el-icon>
        <span>特殊赛事</span>
      </template>

      <el-menu-item index="2-1" @click="go_page('special')">
        <el-icon><TrendCharts /></el-icon>
        <template #title>成绩总览</template>
      </el-menu-item>

      <el-menu-item index="2-2" @click="go_page('cubing')" disabled>
        <el-icon><Grid /></el-icon>
        <template #title>进行复原</template>
      </el-menu-item>

    </el-sub-menu>


    <el-menu-item index="3" @click="go_page('history')">
      <el-icon><document /></el-icon>
      <template #title>历史赛事</template>
    </el-menu-item>

    <el-menu-item index="4" @click="go_page('record')">
      <el-icon><Medal /></el-icon>
      <template #title>社团记录</template>
    </el-menu-item>


    <el-menu-item index="5" @click="go_page('dataAnalysis')" disabled>
      <el-icon><DataAnalysis /></el-icon>
      <template #title>数据分析</template>
    </el-menu-item>


    <el-menu-item index="6" @click="go_page('rank')">
      <el-icon><Tickets /></el-icon>
      <template #title>排名</template>
    </el-menu-item>


    <el-menu-item index="7" @click="go_page('setting')" disabled>
      <el-icon><setting /></el-icon>
      <template #title>设置</template>
    </el-menu-item>


    <el-menu-item index="8" @click="go_page('about')">
      <el-icon><InfoFilled /></el-icon>
      <template #title>关于</template>
    </el-menu-item>


  </el-menu>
</template>

<script lang="ts" setup>

import {ref} from "vue";
import {go_page} from "@/utils";

const isCollapse = ref(true)


</script>

<style scoped>

</style>
