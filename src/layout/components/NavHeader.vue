<template>
  <el-menu class="el-menu-demo" mode="horizontal" background-color="#EC4141FF" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="1" disabled>
      <el-icon size="50"><ElementPlus /></el-icon>
      <template #title> SCUCAComp </template>
    </el-menu-item>
  </el-menu>
  <el-menu class="func" text-color="#fff" active-text-color="#fff" background-color="#EC4141FF">
    <el-menu-item index="1" @click="close_window"><el-icon><Close /></el-icon></el-menu-item>
    <el-menu-item index="2" @click="maximize_or_restore_window"><el-icon><FullScreen /></el-icon></el-menu-item>
    <el-menu-item index="3" @click="minimize_window"><el-icon><SemiSelect /></el-icon></el-menu-item>
    <div class="user-popover"><nav-user /></div>
  </el-menu>
  <div class="h-6" />
</template>

<script lang="ts" setup>
import {ipcRenderer} from "electron"
import {ref} from "vue";
import {go_page} from "@/utils";
import NavUser from "@/layout/components/NavUser.vue";


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
.user-popover {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
