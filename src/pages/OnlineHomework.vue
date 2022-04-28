<template>
  <div id="app-online-homework">
    在线作业啊啊啊啊啊啊啊
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
</script>

<style lang="scss">
#app-online-homework {
  text-align: center;
}
</style>
