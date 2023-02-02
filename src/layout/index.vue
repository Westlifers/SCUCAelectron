<template>

  <el-container>
    <el-header>
      <nav-header />
    </el-header>

    <el-container>
      <nav-side-bar />
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script lang="ts">
import NavSideBar from "@/layout/components/NavSideBar.vue";
import NavHeader from "@/layout/components/NavHeader.vue";

import {defineComponent} from 'vue'

export default defineComponent({
  name: 'App',
  components: {NavSideBar, NavHeader}
});
</script>

<style scoped>
.el-header {
  padding: 0;
  -webkit-app-region: drag;
}

</style>
