<template>
  <div id="app-client-source-download">
    <el-menu
      default-active="sourcedownload"
      class="nav-el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#ec1525"
      background-color="rgba(255,255,255,0)"
    >
      <el-menu-item index="sourcedownload">资源下载</el-menu-item>
    </el-menu>

    <div id="file-list">
      <el-table :data="tableData" id="e-table">
        <el-table-column prop="fileName" label="文件名" width="800">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-checkbox v-model="scope.row.done"></el-checkbox>
              <img
                src="../assets/img/folder.gif"
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
                src="../assets/img/download.png"
                style="width: 20px; height: 20px"
              />
            </div>
          </template>
        </el-table-column>
      </el-table>

      <div style="text-align: left">
        <el-checkbox v-model="selectAll"
          >全选 <span style="color: red">批量下载</span></el-checkbox
        >
      </div>

      <div id="page">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1"
          prev-text="首页&nbsp;&nbsp;&nbsp;&nbsp;上一页"
          next-text="下一页&nbsp;&nbsp;&nbsp;&nbsp;尾页"
          background:true
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const activeNames = ref(["1"]);
const handleChange = (val) => {
  console.log(val);
};

const tableData = ref([
  {
    done: false,
    fileName: "1_学习任务一 技能节报名小程序",
    uploader: "孟洁",
    uploadTime: "2022-04-27",
  },
  {
    done: false,
    fileName: "2_学习任务二 开发小游戏",
    uploader: "孟洁",
    uploadTime: "2022-04-27",
  },
  {
    done: false,
    fileName: "3_学习任务三 开发天气预报小程序",
    uploader: "孟洁",
    uploadTime: "2022-04-27",
  },
  {
    done: false,
    fileName: "4_学习任务四 开发通讯录管理系统",
    uploader: "孟洁",
    uploadTime: "2022-04-27",
  },
]);

//实时计算被选中的项目
let activeSelect = computed(
  () => tableData.value.filter((v) => v.done == true).length
);
let all = computed(() => tableData.value.length);
//全选按钮
const selectAll = computed({
  get: function () {
    return activeSelect.value === all.value;
  },
  set: function (value) {
    tableData.value.forEach((item) => {
      item.done = value;
    });
  },
});
</script>

<style lang="scss">
@media screen and (max-width: 1420px) {
}

@media screen and (min-width: 1420px) {
  .nav-el-menu-demo {
    display: none;
  }
}

#app-client-source-download {
  min-height: 700px;
  #file-list {
    width: 80%;
    margin: 50px auto;
    border-radius: 20px 20px;
    padding: 2%;
    background: white;
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);

    #e-table {
      font-size: medium;
      .el-table__row {
        height: 75px;
      }
    }

    #page {
      display: flex;
      justify-content: center;
      margin: auto;
      .el-pagination .is-active {
        background-color: #ec1525;
        border-radius: 20px;
      }
    }
  }
}
</style>
