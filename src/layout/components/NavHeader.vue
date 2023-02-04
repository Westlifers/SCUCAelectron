<template>
  <el-menu class="el-menu-demo" mode="horizontal" background-color="#EC4141FF" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="1" disabled>社团公告</el-menu-item>
    <el-sub-menu index="2" disabled>
      <template #title>练习</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" @click="go_page('login')">
      <template #title>登录</template>
    </el-menu-item>
  </el-menu>
  <el-menu class="func" text-color="#fff" active-text-color="#fff" background-color="#EC4141FF">
    <el-menu-item index="1" @click="close_window"><el-icon><Close /></el-icon></el-menu-item>
    <el-menu-item index="2" @click="maximize_or_restore_window"><el-icon><FullScreen /></el-icon></el-menu-item>
    <el-menu-item index="3" @click="minimize_window"><el-icon><SemiSelect /></el-icon></el-menu-item>
  </el-menu>
  <div class="h-6" />
</template>

<script lang="ts" setup>
import {ipcRenderer} from "electron"
import {ref} from "vue";
import router from "@/router";

const go_page = (pageName) => {
  router.push({name: pageName})
}

const isMaximized = ref(false)

const minimize_window = () => {
  ipcRenderer.send('win:minimize')
}

const close_window = () => {
  ipcRenderer.send('win:close')
}
const maximize_or_restore_window = () => {
  if (isMaximized.value) {
    ipcRenderer.send('win:restore')
  }
  else {
    ipcRenderer.send('win:maximize')
  }
  isMaximized.value = !isMaximized.value
}

</script>

<style scoped>
.func {
  display: flex;
  position: absolute;
  float: right;
  right: 0;
  flex-direction: row-reverse;
  top: 0;
  -webkit-app-region: no-drag;
  height: 58px;
}
.el-menu-item, .el-sub-menu {
  -webkit-app-region: no-drag;
}
</style>
