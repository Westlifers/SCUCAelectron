<template>

  <el-container id="largest-container">
    <el-header>
      <nav-header />
    </el-header>

    <el-container>
      <nav-side-bar />
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
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

.el-main {
  padding: 0;
  height: calc(100vh - 60px);
}

#largest-container {
  height: 100vh;
}

</style>
