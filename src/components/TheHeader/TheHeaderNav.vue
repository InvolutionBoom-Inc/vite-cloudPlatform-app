<template>
  <div id="header-nav">
    <img :src="currentBanner" class="banner" />
    <div class="nav-box">
      <el-menu
        :default-active="activeIndex"
        class="nav-el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        active-text-color="#ec1525"
        background-color="rgba(255,255,255,0)"
      >
        <el-menu-item index="Home">首页</el-menu-item>
        <el-menu-item index="CourseOutline">交流论坛</el-menu-item>
        <el-menu-item index="ClientSourceDownload">课程资源</el-menu-item>
        <el-menu-item index="OnlineHomework">在线作业</el-menu-item>
        <!-- <el-menu-item index="4">在线作业</el-menu-item>
      <el-menu-item index="5">交流论坛</el-menu-item> -->
      </el-menu>
      <el-input
        v-model="inputNav"
        class="nav-input"
        placeholder="请输入要搜索的资源~"
        :suffix-icon="Search"
        autofocus="true"
      />
    </div>
  </div>
</template>

<script setup>
//引入组合式api
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Search } from "@element-plus/icons-vue";

onMounted(() => {
  router.push(route.path);
});

const router = useRouter();
const route = useRoute();

const activeIndex = ref("Home");
const currentBanner = ref(`src/assets/img/banner_Home.jpg`);
const handleSelect = (routerPath) => {
  router.push(`/${routerPath}`);
  currentBanner.value = `src/assets/img/banner_${routerPath}.jpg`;
};

const inputNav = ref("");
</script>

<style lang="scss">
#header-nav {
  .banner {
    width: 1420px;
  }

  .nav-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;

    .nav-el-menu-demo {
      width: 40%;
      border-bottom: none;
      display: flex;

      .el-menu-item {
        font-family: "黑体";
        font-size: 20px;
        position: relative;
      }
    }
    .nav-input {
      width: 20%;
      border-radius: none;
      .el-input__inner {
        font-family: "等线";
      }
      .el-input__wrapper.is-focus {
        box-shadow: 0 0 0 1px #ec1525 inset;
      }
      .el-input__icon {
        color: #ec1525;
      }
    }
  }
}
</style>
