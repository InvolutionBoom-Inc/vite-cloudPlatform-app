<template>
  <div id="app">
    <TheHeader />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script setup></script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1420px;
  margin: auto;
  font-family: "等线";
  background-color: #f6f7fb;
}
</style>
