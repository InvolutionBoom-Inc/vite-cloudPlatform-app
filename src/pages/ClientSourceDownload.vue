<template>
  <div id="app-client-source-download">
    <el-table :data="tableData" border id="file-list">
      <el-table-column prop="fileName" label="文件名" width="180" />
      <el-table-column prop="uploader" label="上传者" width="180" />
      <el-table-column prop="uploadTime" label="上传时间" />
      <el-table-column prop="download" label="下载" />
    </el-table>
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
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>

<style lang="scss">
#app-client-source-download {
  text-align: center;

  #file-list {
    width: 80%;
    margin: 2% auto;
    border-radius: 2%;
  }
}
</style>
