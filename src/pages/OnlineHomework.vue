<template>
  <div id="app-online-homework">
    <div id="homework-list">
      <el-card class="box-card" v-for="o of homeworkList" :key="o">
        <h3>{{ o.title }}</h3>
        <p class="h-info-1">
          <span>完成方式：在线编辑</span>
          <span>总分：100 分</span>
          <span>参与人数：{{ o.totalStudent }} 人</span>
          <span>平均分：{{ o.averagePoint }} 分</span>
          <span>最高分：100 分</span>
        </p>
        <pre>
          {{ o.content }}
        </pre>
        <p class="extra-image" v-if="o.extraImg !== ''">
          <img :src="o.extraImg" style="width: 1000px; height: 600px" />
        </p>
        <p class="submit-homework">
          <el-button type="danger" style="background: rgba(235, 22, 36)">
            提交作业
          </el-button>
        </p>
      </el-card>
    </div>
    <div id="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="4"
        :total="12"
        prev-text="首页&nbsp;&nbsp;&nbsp;&nbsp;上一页"
        next-text="下一页&nbsp;&nbsp;&nbsp;&nbsp;尾页"
      />
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

const homeworkList = ref([
  {
    title: "任务四 实现通讯录管理系统",
    totalStudent: 61,
    averagePoint: 73.2,
    content: `按照如下步骤完成系统设计
          1、在数据库创建person表，拥有sid、公司名、电话、qq、微信、性别、职务、姓名等字段
          2、创建java工程，导入jdbc驱动 把DB放入工程
          3、创建personInfo类，代表一个通讯录中的联系人，是一个实体类
          4、创建persons类，这是一个业务逻辑类，包含要操作数据库的所有业务方法
          5、创建界面PersonPanel类，解决界面问题，处理事件，与用户互动
          具体类图设计如下：`,
    extraImg: "src/assets/img/hw1.png",
  },
  {
    title: "4.2 jdbc 实现登录注册（使用db类简化流程）",
    totalStudent: 68,
    averagePoint: 94.7,
    content: `这个任务需要实现如下几个步骤
1、建立数据库和数据表 UserTable
2、创建UserInfo类 ，该类的属性和数据表中的字段一一对应，余下的get/set,constructor,toString自动生成
3、创建Users类，包含login方法（该方法参数吗？返回什么？）、register(该方法需要一个UserInfo对象作为参数，这个参数包含需要注册的用户全部信息)
4、创建测试类，实现登录和注册`,
    extraImg: "",
  },
  {
    title: "任务二 自选游戏开发",
    totalStudent: 68,
    averagePoint: 92.9,
    content: `自选一个游戏开发 提交代码和效果截图`,
    extraImg: "",
  },
  {
    title: "4.1实现通讯录管理的界面",
    totalStudent: 69,
    averagePoint: 96.8,
    content: ``,
    extraImg: "src/assets/img/hw2.png",
  },
]);
</script>

<style lang="scss">
#app-online-homework {
  text-align: center;

  #homework-list {
    width: 80%;
    margin: 2% auto;
    border-radius: 10px 10px;
    padding: 1%;
    background: white;
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .box-card {
      text-align: left;

      .h-info-1 {
        span {
          margin-right: 5%;
          color: grey;
        }
      }
    }

    .submit-homework {
      display: flex;
      justify-content: right;
    }
  }

  #page {
    display: flex;
    justify-content: center;
  }
}
</style>
