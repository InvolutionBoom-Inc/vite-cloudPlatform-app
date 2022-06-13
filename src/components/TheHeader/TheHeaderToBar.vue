<template>
  <div id="header-tobar">
    <div class="tobar-grid">
      <img src="../../assets/img/logo.png" alt="logo" class="logo" />
      <div class="right-button">
        <el-button type="text">中文</el-button>
        <el-button type="text">登录/注册</el-button>
      </div>

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
import { Search } from "@element-plus/icons-vue";
</script>

<style lang="scss">
#header-tobar {
  .tobar-grid {
    position: fixed;
    top: 0px;
    z-index: 100;
    width: 100%;
    min-height: 50px;
    background-color: #ec1525;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .logo {
      width: 50px;
      height: 35px;
    }
  }
}

@media screen and (max-width: 1420px) {
  .tobar-grid {
    .nav-input {
      width: 80%;
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
    .right-button {
      display: none;
    }
  }
}

@media screen and (min-width: 1420px) {
  .tobar-grid {
    .nav-input {
      display: none;
    }
    .right-button {
      .el-button {
        color: #fefcfb;
        font-family: "等线";
      }
    }
  }
}
</style>
