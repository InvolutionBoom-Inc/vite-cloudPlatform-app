<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el_menu_demo"
      mode="horizontal"
      @select="handleSelect"
      :router="true"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-sub-menu index="/CourseOutline">
        <template #title>课程概要</template>
        <el-menu-item index="/CourseOutline">教学计划</el-menu-item>
        <!-- <el-sub-menu index="2-4">
          <template #title>课件</template>
          <el-menu-item index="2-4-1">课件1</el-menu-item>
          <el-menu-item index="2-4-2">课件2</el-menu-item>
          <el-menu-item index="2-4-3">课件3</el-menu-item>
        </el-sub-menu> -->
      </el-sub-menu>
      <el-menu-item index="/ClientSourceDownload">资源下载</el-menu-item>
      <!-- <el-menu-item index="4">在线作业</el-menu-item>
      <el-menu-item index="5">交流论坛</el-menu-item> -->
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const activeIndex = ref("/");
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};

const router = useRouter();
const route = useRoute();

onMounted(() => {
  router.push(route.path);
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .el_menu_demo {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
  }
}
</style>
