<template>
  <div id="home-top-web">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <img
            src="../../../assets/img/课程.png"
            class="icon"
            alt="课程简介icon"
          />
          <span>课程简介</span>
        </div>
      </template>

      <div class="card-main">
        <div class="main-content">
          <p>
            《Java应用程序开发》是信通学院人工智能技术应用专业应用开发培养路线的一门核
            心专业课程，是一体化课程体系的一个重要环节。
          </p>
          <p>
            这门课程在整个专业课程体系中承上启下，对于让学生真正掌握软件编程技术来说
            至关重要。整个学习内容由4个企业小项目组成，培养学生掌握多线程设计、GU设计
            、网络编程、数据库编程等核心岗位能力，项目实施的过程与企业软件开发过程。一
            致，培养学生核心职业素养和工匠精神。
          </p>
        </div>
        <img src="../../../assets/img/java.jpeg" alt="java-img" />
      </div>
    </el-card>
  </div>

  <div id="home-top-mobile">
    <p class="title">简介</p>
    <p>
      《Java应用程序开发》是信通学院人工智能技术应用专业应用开发培养路线的一门核
      心专业课程，是一体化课程体系的一个重要环节。
    </p>
    <p>
      这门课程在整个专业课程体系中承上启下，对于让学生真正掌握软件编程技术来说
      至关重要。整个学习内容由4个企业小项目组成，培养学生掌握多线程设计、GU设计
      、网络编程、数据库编程等核心岗位能力，项目实施的过程与企业软件开发过程。一
      致，培养学生核心职业素养和工匠精神。
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss">
@media screen and (min-width: 1420px) {
  #home-top-web {
    .box-card {
      width: 85%;
      margin: 30px auto;
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

        .main-content {
          width: 60%;
          text-align: justify;
          line-height: 30px;

          p {
            text-indent: 20px;
            font-family: "等线";
          }
        }
        img {
          height: 210px;
          width: 30%;
          position: relative;
          top: -30px;
        }
      }
    }
  }

  #home-top-mobile {
    display: none;
  }
}

@media screen and (max-width: 1420px) {
  #home-top-web {
    display: none;
  }

  #home-top-mobile {
    height: 100vh;
    p {
      font-family: "楷体";
      text-align: left;
      width: 90%;
      margin: 20px auto;
      text-indent: 1.5em;
    }
  }
}
</style>
