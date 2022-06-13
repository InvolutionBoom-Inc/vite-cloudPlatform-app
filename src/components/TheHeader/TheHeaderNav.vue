<template>
  <div id="header-nav">
    <img :src="currentBanner" class="banner" />

    <div class="nav-box-web">
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
      </el-menu>
      <el-input
        v-model="inputNav"
        class="nav-input"
        placeholder="请输入要搜索的资源~"
        :suffix-icon="Search"
        autofocus="true"
      />
    </div>

    <div class="nav-box-mobile">
      <div class="nav-el-menu-demo" @click="changeNav">
        <div class="el-menu-item-own" index="Home">
          <img
            :src="
              activeIndex == 'Home'
                ? getAssetsFile('房子1.png')
                : getAssetsFile('房子2.png')
            "
            alt="首页"
            class="icon"
          />

          <div :style="activeIndex == 'Home' ? 'color:red' : 'color:black'">
            首页
          </div>
        </div>

        <div class="el-menu-item-own" index="CourseOutline">
          <img
            :src="
              activeIndex == 'CourseOutline'
                ? getAssetsFile('论坛1.png')
                : getAssetsFile('论坛2.png')
            "
            alt="论坛"
            class="icon"
          />

          <div
            :style="
              activeIndex == 'CourseOutline' ? 'color:red' : 'color:black'
            "
          >
            论坛
          </div>
        </div>

        <div class="el-menu-item-own" index="ClientSourceDownload">
          <img
            :src="
              activeIndex == 'ClientSourceDownload'
                ? getAssetsFile('资源1.png')
                : getAssetsFile('资源2.png')
            "
            alt="资源"
            class="icon"
          />

          <div
            :style="
              activeIndex == 'ClientSourceDownload'
                ? 'color:red'
                : 'color:black'
            "
          >
            资源
          </div>
        </div>

        <div class="el-menu-item-own" index="OnlineHomework">
          <img
            :src="
              activeIndex == 'OnlineHomework'
                ? getAssetsFile('作业1.png')
                : getAssetsFile('作业2.png')
            "
            alt="作业"
            class="icon"
          />

          <div
            :style="
              activeIndex == 'OnlineHomework' ? 'color:red' : 'color:black'
            "
          >
            作业
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//引入组合式api
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Search } from "@element-plus/icons-vue";
import { getAssetsFile } from "../../utils/pub-use.js";

onMounted(() => {
  router.push(route.path);
});

const router = useRouter();
const route = useRoute();

const activeIndex = ref("Home");
const currentBanner = computed(() =>
  getAssetsFile(`banner_${activeIndex.value}.jpg`)
);
const handleSelect = (routerPath) => {
  router.push(`/${routerPath}`);
};

const inputNav = ref("");

const changeNav = (e) => {
  const pathName = e.target.parentElement.getAttribute("index");
  if (pathName == null) {
    return;
  }

  activeIndex.value = pathName;
  console.log(activeIndex.value);
  router.push(`/${pathName}`);
};
</script>

<style lang="scss">
#header-nav {
  margin-top: 50px;
  .banner {
    width: 100%;
  }
}

@media screen and (max-width: 1420px) {
  #header-nav {
    .nav-input {
      display: none;
    }

    .nav-box-web {
      display: none;
    }

    .nav-box-mobile {
      width: 100%;
      position: fixed;
      bottom: 0;
      z-index: 100;

      .nav-el-menu-demo {
        display: flex;
        justify-content: space-between;
        background: white;
        height: 50px;
        align-items: center;

        img {
          width: 25px;
          height: 25px;
          margin: 0 auto;
          margin-bottom: 5px;
        }

        .el-menu-item-own {
          display: flex;
          flex-direction: column;
          flex: 1;
          height: 100%;
          justify-content: center;
        }
      }
    }
  }
}

@media screen and (min-width: 1420px) {
  #header-nav {
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

    .nav-box-web {
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
    }

    .nav-box-mobile {
      display: none;
    }
  }
}
</style>
