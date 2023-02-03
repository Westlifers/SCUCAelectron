<template>
  <div class="about">
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>我们是谁？</span>
        </div>
      </template>
      <div class="text">
        <p>四川大学魔方协会成立于2013年11月，最初为院级社团，挂靠于华西临床医学院。</p>
        <p>我们是</p>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.about {
  display: flex;
  flex-direction: row;
  justify-content: left;
  max-width: 30%;
}
.text {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  text-align: left;
  text-indent:2em
}

</style>
