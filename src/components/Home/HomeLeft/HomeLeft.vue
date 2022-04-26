<template>
  <div id="home-left">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <img
            src="../../../assets/img/书.png"
            alt="授课教师icon"
            class="icon"
          />
          <span>课程内容</span>
        </div>
      </template>
      <div class="card-main">
        <div v-for="(card, index) in cardData" :key="index">
          <HomeLeftCardSmallBox :cardData="card" />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
const cardData = [
  {
    title: "任务一 技能节报名小程序",
    img: "1.png",
    son: [
      { title: "子任务1.1" },
      { title: "子任务1.1" },
      { title: "子任务1.1" },
    ],
  },
  {
    title: "任务二 开发小游戏",
    img: "2.png",
    son: [
      { title: "子任务2.1实现游戏界面" },
      { title: "子任务2.3绘制面板" },
      { title: "子任务2.4设计和实现线程" },
      { title: "子任务2.5游戏开发与调试" },
    ],
  },
  {
    title: "任务三 开发天气预报小程序",
    img: "3.png",
    son: [
      { title: "子任务3.1实现界面" },
      { title: "子任务3.2下载网络数据" },
      { title: "子任务3.3解析Json数据" },
      { title: "子任务3.4实现天气查询" },
    ],
  },
  {
    title: "任务四 开发通讯录管理系统",
    img: "4.png",
    son: [
      { title: "子任务4.1实现界面" },
      { title: "子任务4.2使用JDBC处理数据库数据" },
      { title: "子任务4.3设计类图" },
      { title: "子任务4.4项目综合实施与调试" },
    ],
  },
];
</script>

<style lang="scss">
#home-left {
  width: 65%;

  .box-card {
    margin-bottom: 10px;
    border-radius: 20px;

    .card-header {
      display: flex;
      justify-content: start;
      align-items: end;
      font-family: "黑体";
      font-size: 20px;

      .icon {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
    }

    .el-card__header {
      border-bottom: none;
    }

    .text {
      font-size: 14px;
    }

    .item {
      margin-bottom: 18px;
    }

    .card-main {
      display: flex;
      width: 100%;
      justify-content: space-around;
      flex-direction: column;
      border-top: 1px solid rgb(111, 111, 111, 0.5);
      position: relative;
      top: -30px;

      img {
        width: 30%;
      }
    }
  }
}
</style>
