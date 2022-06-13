<template>
  <div id="app-home-web">
    <HomeTop />
    <div class="main">
      <HomeLeft />
      <HomeRight />
    </div>
  </div>

  <div id="app-home-mobile">
    <el-menu
      :default-active="activeIndex"
      class="nav-el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#ec1525"
      background-color="rgba(255,255,255,0)"
    >
      <el-menu-item index="intro">简介</el-menu-item>
      <el-menu-item index="coursecontent">课程内容</el-menu-item>
      <el-menu-item index="instructor">授课教师</el-menu-item>
    </el-menu>

    <HomeTop v-if="activeIndex == 'intro'" />
    <HomeLeft v-else-if="activeIndex == 'coursecontent'" />
    <HomeRight v-else-if="activeIndex == 'instructor'" />
  </div>
</template>

<script setup>
import { ref } from "vue";
const activeIndex = ref("intro");

const handleSelect = (e) => {
  activeIndex.value = e;
};
</script>

<style lang="scss">
@media screen and (min-width: 1420px) {
  #app-home-mobile {
    display: none;
  }

  #app-home-web {
    width: 100%;
    display: flex;
    flex-direction: column;

    .main {
      display: flex;
      width: 85%;
      justify-content: space-between;
      margin: 25px auto;
    }
  }
}

@media screen and (max-width: 1420px) {
  #app-home-web {
    display: none;
  }

  #app-home-mobile {
    font-size: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    .main {
      display: flex;
      width: 85%;
      justify-content: space-between;
      flex-direction: column;
      margin: 25px auto;
    }
  }
}
</style>
