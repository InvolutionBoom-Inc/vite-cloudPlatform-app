<template>
  <div id="home-right-top">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <img
            src="../../../assets/img/教师.png"
            alt="授课教师icon"
            class="icon"
          />
          <span>授课教师</span>
        </div>
      </template>
      <div class="card-main">
        <div v-for="(techerItem, index) in techerData" :key="index">
          <HomeRightTopCard :techerData="techerItem" />
        </div>
      </div>
    </el-card>
  </div>
</template>
<script setup>
import { ref } from "vue";
const techerData = [
  {
    name: "孟洁",
    introduction: ["孟洁", "课程负责人", "副教授 本科"],
    photo: "孟.jpg",
  },
  { name: "周兵", introduction: ["周兵", "讲师", "本科"], photo: "周.jpg" },
  {
    name: "陈昀",
    introduction: ["陈昀", "副教授", "硕士研究生"],
    photo: "陈.jpg",
  },
  {
    name: "左海威",
    introduction: ["左海威", "讲师", "硕士研究生"],
    photo: "左.jpg",
  },
];
</script>

<style lang="scss">
#home-right-top {
  width: 100%;

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
      position: relative;
      top: -20px;

      .main-content {
        width: 60%;
        text-align: justify;
        line-height: 30px;

        p {
          text-indent: 20px;
          font-family: "等线";
        }
      }
    }
  }
}
</style>
