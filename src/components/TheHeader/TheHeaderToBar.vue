<template>
  <div id="header-tobar">
    <div class="tobar-grid">
      <!-- <img src="../../assets/img/logo.png" alt="logo" class="logo" /> -->
      <div class="logo">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        <div class="four"></div>
      </div>

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
      width: 30px;
      height: 30px;
      animation: rotate 2s linear infinite;
      .one,
      .two,
      .three,
      .four {
        width: 15px;
        height: 15px;
        position: absolute;
      }

      .one {
        left: 15px;
        background: linear-gradient(to right, white 50%, transparent 50%);
        border-radius: 15px 0 0 15px;
      }

      .two {
        right: 0;
        background: linear-gradient(to bottom, white 50%, transparent 50%);
        border-radius: 15px 15px 0 0;
        top: 15px;
      }

      .three {
        left: 15px;
        background: linear-gradient(to left, white 50%, transparent 50%);
        border-radius: 0 15px 15px 0;
        top: 15px;
      }

      .four {
        top: 20px;
        background: linear-gradient(to top, white 50%, transparent 50%);
        border-radius: 0 0 15px 15px;
      }

      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
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
