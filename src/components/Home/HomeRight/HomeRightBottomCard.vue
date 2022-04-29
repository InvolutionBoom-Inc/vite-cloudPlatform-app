<template>
  <div id="right-bottom-card">
    <img :src="getAssetsFile(srcName + '.jpg')" :alt="`${srcName}`" />
    <p><slot></slot></p>
  </div>
</template>

<script setup>
import { getAssetsFile } from "../../../utils/pub-use.js";

const props = defineProps({
  srcName: String,
});
</script>

<style lang="scss">
#right-bottom-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  img {
    width: 90px;
    height: 50px;
    border-radius: 7px;
  }
  p {
    margin-top: 5px;
    font-family: "黑体";
  }
}
</style>
