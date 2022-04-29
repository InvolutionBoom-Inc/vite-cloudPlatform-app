<template>
  <div id="right-small-box">
    <img :src="getAssetsFile(techerData.photo)" />
    <div class="content">
      <p>{{ techerData.introduction[0] }}</p>
      <p v-if="techerData.name === '孟洁'" style="color: #ec1525">
        {{ techerData.introduction[1] }}
      </p>
      <p v-else>{{ techerData.introduction[1] }}</p>
      <p>{{ techerData.introduction[2] }}</p>
    </div>
  </div>
</template>

<script setup>
import { getAssetsFile } from "../../../utils/pub-use.js";

const props = defineProps({
  techerData: Object,
});
</script>

<style lang="scss">
#right-small-box {
  display: flex;
  width: 90%;
  border: 1px solid rgb(79, 78, 78, 0.5);
  justify-content: space-between;
  margin: 10px auto;

  img {
    width: 115px;
    height: 115px;
  }

  .content {
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      text-align: left;
      font-family: "等线";
      line-height: 25px;
      &:nth-child(1) {
        font-weight: bold;
      }
    }
  }
}
</style>
