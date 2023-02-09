<template>

  <el-container id="asd">
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

  <nav-affix />

</template>

<script lang="ts">
import NavSideBar from "@/layout/components/NavSideBar.vue";
import NavHeader from "@/layout/components/NavHeader.vue";

import {defineComponent} from 'vue'
import NavAffix from "@/layout/components/NavAffix.vue";

export default defineComponent({
  name: 'App',
  components: {NavAffix, NavSideBar, NavHeader}
});
</script>

<style scoped>
.el-header {
  padding: 0;
  -webkit-app-region: drag;
}

.el-main {
  padding: 0;
}

#asd {
  height: 100vh;
}

</style>
