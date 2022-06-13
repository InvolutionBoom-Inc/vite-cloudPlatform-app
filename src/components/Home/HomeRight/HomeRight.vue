<template>
  <div id="home-right">
    <HomeRightTop />
    <HomeRightBottom />
  </div>
</template>

<script setup></script>

<style lang="scss">
@media screen and (max-width: 1420px) {
  #home-right {
    .el-card {
      background-color: transparent;
    }
    margin-bottom: 50px;
  }
  #home-right-bottom,
  .el-card__header {
    display: none;
  }
}

@media screen and (min-width: 1420px) {
  #home-right {
    width: 30%;
    display: flex;
    flex-direction: column;
  }
}
</style>
