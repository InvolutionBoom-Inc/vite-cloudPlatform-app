<template>
  <div id="app-home">
    <HomeTop />
    <div class="main">
      <HomeLeft />
      <HomeRight />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
#app-home {
  width: 100%;
  display: flex;
  flex-direction: column;

  .main {
    display: flex;
    width: 85%;
    justify-content: space-between;
    margin: 25px auto;
  }
}
</style>
