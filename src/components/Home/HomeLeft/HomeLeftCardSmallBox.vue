<template>
  <div id="Left-small-box">
    <div class="left">
      <div class="title">{{ cardData.title }}</div>
      <ul v-for="(cardItem, index) in cardData.son" :key="index">
        <li v-if="cardData.son.length">{{ cardItem.title }}</li>
      </ul>
    </div>
    <img :src="getAssetsFile(cardData.img)" :alt="cardData.img" />
  </div>
  <hr />
</template>

<script setup>
import { defineProps, ref } from "vue";
import { getAssetsFile } from "../../../utils/pub-use.js";

const props = defineProps({
  cardData: Object,
});
</script>

<style lang="scss">
@media screen and (max-width: 1420px) {
  #Left-small-box {
    width: 100%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

@media screen and (min-width: 1420px) {
  #Left-small-box {
    width: 85%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
#Left-small-box {
  .left {
    text-align: left;
    width: 60%;

    .title {
      font-weight: bold;
      font-family: "等线";
    }

    ul {
      width: 100%;
      margin-top: 10px;
      line-height: 30px;
      font-family: "等线";
      margin-left: 20px;

      li {
        color: #979797;
        cursor: pointer;
        transition: all 0.2s ease-in;
      }

      li:hover {
        transform: translate(5%, 0);
      }

      li:before {
        content: "";
        width: 10px;
        height: 10px;
        background: red;
        display: inline-block;
        border-radius: 50%;
        margin-right: 10px;
        vertical-align: middle;
        margin-top: -3px;
      }
    }
  }

  img {
    transition: all 0.5s ease-in-out;
    border-radius: 20px;
    cursor: pointer;
    height: 137px;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
