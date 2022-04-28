<template>
  <div id="app-client-source-download">
    <div id="file-list">
      <el-table :data="tableData" id="e-table">
        <el-table-column prop="fileName" label="文件名" width="800">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-checkbox></el-checkbox>
              <img
                src="src/assets/img/folder.gif"
                style="width: 20px; height: 20px; margin-left: 5px"
              />
              <span style="margin-left: 10px">{{ scope.row.fileName }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="uploader" label="上传者" />
        <el-table-column prop="uploadTime" label="上传时间" />
        <el-table-column prop="download" label="下载">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <img
                src="src/assets/img/download.png"
                style="width: 20px; height: 20px"
              />
            </div>
          </template>
        </el-table-column>
      </el-table>

      <div style="text-align: left">
        <el-checkbox>全选 <span style="color: red">批量下载</span></el-checkbox>
      </div>

      <div id="page">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1"
          prev-text="首页&nbsp;&nbsp;&nbsp;&nbsp;上一页"
          next-text="下一页&nbsp;&nbsp;&nbsp;&nbsp;尾页"
        />
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheFooter from "../components/TheFooter.vue";

const activeNames = ref(["1"]);
const handleChange = (val) => {
  console.log(val);
};

const tableData = [
  {
    fileName: "1_学习任务一 技能节报名小程序",
    uploader: "孟洁",
    uploadTime: "2022-04-27",
  },
  {
    fileName: "2_学习任务二 开发小游戏",
    uploader: "孟洁",
    uploadTime: "2022-04-27",
  },
  {
    fileName: "3_学习任务三 开发天气预报小程序",
    uploader: "孟洁",
    uploadTime: "2022-04-27",
  },
  {
    fileName: "4_学习任务四 开发通讯录管理系统",
    uploader: "孟洁",
    uploadTime: "2022-04-27",
  },
];
</script>

<style lang="scss">
#app-client-source-download {
  text-align: center;

  #file-list {
    width: 80%;
    margin: 2% auto;
    border-radius: 20px 20px;
    padding: 2%;
    background: white;
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);

    #e-table {
      font-size: medium;
    }

    #page {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
