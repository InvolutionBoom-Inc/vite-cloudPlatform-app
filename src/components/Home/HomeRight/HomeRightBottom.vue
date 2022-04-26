<template>
  <div id="home-right-bottom">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-icon :size="30" color="#ec1525"><i-edit-pen /></el-icon>
          <span>课程概要</span>
        </div>
      </template>
      <div class="card-main">
        <div v-for="(classItem, index) in classData" :key="index">
          <HomeRightBottomCard :srcName="classItem">{{
            classItem
          }}</HomeRightBottomCard>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const classData = ["授课计划", "教学条件", "教学环境", "校企合作", "资源建设"];
</script>

<style lang="scss">
#home-right-bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px auto;

  .box-card {
    margin-bottom: 10px;
    border-radius: 20px;
    width: 100%;

    .card-header {
      display: flex;
      justify-content: start;
      align-items: end;
      font-family: "黑体";
      font-size: 20px;

      .el-icon {
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
      justify-content: space-evenly;
      flex-wrap: wrap;
      position: relative;
    }
  }
}
</style>
