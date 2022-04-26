<template>
  <div id="app">
    <TheHeader />
    <router-view></router-view>
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
}
</style>
