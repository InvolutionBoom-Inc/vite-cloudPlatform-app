<template>
  <div id="header-tobar">
    <div class="tobar-grid">
      <img src="../../assets/img/logo.png" alt="logo" class="logo" />
      <div class="right-button">
        <el-button type="text">中文</el-button>
        <el-button type="text">登录/注册</el-button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
#header-tobar {
  .tobar-grid {
    min-height: 50px;
    background-color: #ec1525;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .logo {
      width: 50px;
      height: 35px;
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
