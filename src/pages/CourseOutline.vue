<template>
  <div id="app-course-outline">
    <el-menu
      default-active="courseoutline"
      class="nav-el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#ec1525"
      background-color="rgba(255,255,255,0)"
    >
      <el-menu-item index="courseoutline">论坛</el-menu-item>
    </el-menu>

    <div class="block">
      <div class="button">
        <el-button class="isclick" round>全部</el-button>
        <el-button class="noclick" round>未解决</el-button>
        <el-button class="noclick" round>精华</el-button>
        <el-button class="addclick" round>+我来发帖</el-button>
      </div>
      <div class="main">
        <div id="forum-list">
          <el-card
            class="box-card"
            v-for="(forum, index) in forumList"
            :key="index"
          >
            <div class="box-card-tip" v-if="index == 0">
              <img
                src="../assets/img/精2.png"
                style="width: 46px; height: 52px"
              />
            </div>
            <img
              class="forumImg"
              :src="getAssetsFile(forum.headImgName)"
              style="width: 5.26%; height: 5.26%"
            />
            <div class="title">{{ forum.title }}</div>
            <div class="content" v-if="forum.contentif">
              <div class="contentTitle">{{ forum.head_content }}</div>
              <div class="contentMain">{{ forum.content }}</div>
            </div>
            <div v-else class="addreply">
              <el-button class="addclick" style="float: left" round
                >+我来回答</el-button
              >
            </div>
            <div class="bottom">
              <span>{{ forum.reply_num }}回答</span>
              <span>{{ forum.view_num }}浏览</span>
              <span>
                <img
                  src="../assets/img/点赞.png"
                  class="likedImg"
                  style="width: 20px; height: 20px"
                />
                {{ forum.liked_num }}
              </span>
            </div>
            <span class="time">{{ forum.time }}</span>
          </el-card>
        </div>

        <div class="forum-tip">
          <el-card class="tip-card">
            <div class="tip-card-title">
              <img
                src="../assets/img/星星.png"
                style="width: 50px; height: 50px; float: left"
              />
              <span>优秀学员</span>
            </div>
            <div v-for="(tip, index) in tipList" :key="index" class="tip-main">
              <img
                :src="getAssetsFile(tip.img)"
                style="width: 100px; height: 100px; float: left"
              />
              <div class="tip-text">
                <span class="tip-name">姓名:{{ tip.name }}</span>
                <span class="tip-level"
                  >星级:<span class="tip-level-text">{{
                    tip.level
                  }}</span></span
                >
                <span v-if="tip.level == '发贴之星'"
                  >发帖数:{{ tip.text }}</span
                >
                <span v-else-if="tip.level == '回贴之星'"
                  >回帖数:{{ tip.text }}</span
                >
                <span v-else-if="tip.level == '解答之星'"
                  >解答数:{{ tip.text }}</span
                >
                <span v-else>平均成绩:{{ tip.text }}</span>
              </div>
            </div>
          </el-card>
        </div>
      </div>
      <div id="page">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="1"
          :total="2"
          prev-text="首页&nbsp;&nbsp;&nbsp;&nbsp;上一页"
          next-text="下一页&nbsp;&nbsp;&nbsp;&nbsp;尾页"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { getAssetsFile } from "../utils/pub-use.js";

const forumList = [
  {
    title: "java初学者用什么软件",
    contentif: true,
    head_content: "最新回答 / 我熬夜不秃头",
    content:
      "java初学者就可以用myeclipse或者eclipse，还有记事本。随着学习的深入，相信慢慢都会了解到也会从中找到最适合自己的那款开发工具。初学者的话不建议上来就用IDE开发工具，比如说Eclipse、MyEclipse、IntelliJ IDEA、netbean。但是也可以使用这些，不建议的原因不便于你了解JavaAPI，及相关的编译原理，编译过程之类的。主要是就是熟悉基础。",
    reply_num: "4",
    view_num: "155",
    liked_num: "48",
    time: "2022-03-18",
    headImgName: "头像1.png",
  },
  {
    title: "Java中有哪些常见的关键字",
    contentif: false,
    head_content: "",
    content: "",
    reply_num: "0",
    view_num: "21",
    liked_num: "1",
    time: "2022-03-02",
    headImgName: "头像2.jpg",
  },
  {
    title: "怎么配置java环境变量",
    contentif: true,
    head_content: "最新回答 / 一起看日出吗",
    content:
      "配置java环境变量的方法：1、右键点击【计算机】，选择【属性】，点击【高级系统设置】，打开环境变量设置；2、新建【JAVA_HOME】变量，并编辑【Path】变量；3、新建【Classpath】变量并编辑即可。",
    reply_num: "2",
    view_num: "55",
    liked_num: "8",
    time: "2022-02-01",
    headImgName: "头像3.jpg",
  },
  {
    title: "面向对象的三大特性是啥",
    contentif: true,
    head_content: "最新回答 / 一起看日出吗",
    content:
      "继承：一般类只能单继承，内部类实现多继承，接口可以多继承封装：将类的某些信息隐藏在类内部，不允许外部程序直接访问，而是通过该类提供的方法来实现对隐藏信息的操作和访问。访问权限控制public > protected > 包 > private 内部类也是一种封装多态：编译时多态，体现在向上转型和向下转型，通过引用类型判断调用哪个方法（静态分派）。运行时多态，体现在同名函数通过不同参数实现多种方法（动态分派）。",
    reply_num: "1",
    view_num: "32",
    liked_num: "12",
    time: "2021-12-27",
    headImgName: "头像4.jpg",
  },
  {
    title: "好累，可以睡觉吗",
    contentif: false,
    head_content: "",
    content: "",
    reply_num: "0",
    view_num: "59",
    liked_num: "20",
    time: "2021-04-02",
    headImgName: "头像5.jpg",
  },
];

const tipList = [
  {
    img: "优秀学员1.jpg",
    name: "张师凯",
    level: "发贴之星",
    text: "4次",
  },
  {
    img: "优秀学员2.jpg",
    name: "张惠熙",
    level: "回贴之星",
    text: "11次",
  },
  {
    img: "优秀学员3.jpg",
    name: "王璐璐",
    level: "发贴之星",
    text: "4次",
  },
  {
    img: "优秀学员4.jpg",
    name: "陆雄",
    level: "解答之星",
    text: "10次",
  },
  {
    img: "优秀学员5.jpg",
    name: "叶丰玮",
    level: "作业之星",
    text: "99.85分",
  },
];
</script>

<style lang="scss">
@media screen and (max-width: 1420px) {
  .block {
    width: 100%;
    #forum-list {
      width: 100%;
    }
    .forum-tip {
      display: none;
    }
  }
  #page {
    width: 100%;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    .number {
      border-radius: 20px;
      margin-right: 20px;
    }
    .el-pagination {
      margin-top: 30px;
    }
    .el-pagination .is-active {
      background-color: #ec1525;
    }
    button {
      margin-right: 20px;
    }
  }
}

@media screen and (min-width: 1420px) {
  .nav-el-menu-demo {
    display: none;
  }

  .block {
    width: 85%;
    #forum-list {
      width: 67%;
    }
    .forum-tip {
      float: right;
      width: 30%;
      margin-top: 20px;
      .tip-card {
        .tip-card-title {
          margin: 10px 0 0 15px;
          height: 55px;
          text-align: left;
          > span {
            font-family: "黑体";
            font-size: 24px;
            float: left;
            margin: 10px 0 0 10px;
          }
        }
        .tip-main {
          margin: 20px auto;
          width: 90%;
          height: 100px;
          border: 3px solid rgb(229, 229, 229);
          .tip-text {
            text-align: left;
            float: left;
            margin: 10px 0 0 15px;
            width: 170px;
            font-family: "等线";
            > span {
              display: block;
              float: left;
              width: 95%;
              margin: 10px 0 0 10px;
            }
            .tip-name {
              font-weight: bold;
            }
            .tip-level {
              span {
                color: red;
              }
            }
          }
        }
      }
    }
  }

  #page {
    width: 65%;
    display: flex;
    justify-content: center;
    .number {
      border-radius: 20px;
      margin-right: 20px;
    }
    .el-pagination {
      margin-top: 30px;
    }
    .el-pagination .is-active {
      background-color: #ec1525;
    }
    button {
      margin-right: 20px;
    }
  }
}

#app-course-outline {
  margin-bottom: 50px;
  .block {
    padding: 30px 0;
    text-align: center;
    display: inline-block;
    box-sizing: border-box;
    vertical-align: top;
    font-size: 14px;
    .button {
      display: flex;
      .isclick {
        margin-left: 15px;
        float: left;
        background-color: red;
        color: white;
      }
      .noclick {
        float: left;
        background-color: #f6f7fb;
        border: 0;
        color: black;
      }
      .addclick {
        background-color: rgb(229, 229, 229);
        color: rgb(94, 94, 94);
      }
    }
    .main {
      #forum-list {
        float: left;
        display: block;

        .box-card {
          margin-top: 20px;
          border-radius: 30px;
          padding-bottom: 35px;
          .box-card-tip {
            float: right;
            margin-top: -21px;
            margin-right: 20px;
          }
          .forumImg {
            float: left;
            margin: 5px 0 0 15px;
            border-radius: 20px;
          }
          .title {
            float: left;
            margin-left: 20px;
            margin-top: 10px;
            font-size: 18px;
            font-family: "等线";
            font-weight: bold;
          }
          .content {
            text-align: left;
            float: left;
            margin: 20px 20px 10px 20px;
            padding-left: 20px;
            width: 80%;
            border-left: 3px solid rgb(229, 229, 229);
            font-size: 14px;
            font-family: "等线";
            color: rgb(94, 94, 94);
            .contentMain {
              margin-top: 5px;
              line-height: 24px;
            }
          }
          .addreply {
            float: left;
            width: 80%;
            margin: 20px 20px 20px 20px;
          }
          .bottom {
            float: left;
            display: inline;
            margin-left: 75px;
            line-height: 20px;
            font-size: 14px;
            color: rgb(158, 158, 158);
            > span {
              margin-right: 26px;
              > img {
                margin-bottom: -5px;
              }
            }
          }
          .time {
            float: right;
            margin-right: 10%;
            margin-top: 4px;
            font-size: 14px;
            color: rgb(158, 158, 158);
          }
        }
      }
    }
  }
}
</style>
