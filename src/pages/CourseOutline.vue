<template>
  <div id="app-course-outline">
    <div class="block">
      <span class="demonstration">欢迎来到课程概要页</span>
      <el-image :src="src" />
    </div>
  </div>
</template>

<script setup>
const src =
  "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg";
</script>

<style lang="scss">
#app-course-outline {
  .block {
    padding: 30px 0;
    text-align: center;
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
    vertical-align: top;
  }

  .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }

  .el-image {
    padding: 0 5px;
    max-width: 300px;
    max-height: 200px;
  }
}
</style>
