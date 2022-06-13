<template>
  <div id="app-the-footer">
    <p>智慧教学云平台业务咨询请联系工程师.客户服务QQ群： 812036571</p>
    <p>
      服务微信公众号：得实e学，客服电话：0755-26695096-807,0755-26695096-811
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss">
@media screen and (max-width: 1420px) {
  #app-the-footer {
    display: none;
  }
}

@media screen and (min-width: 1420px) {
  #app-the-footer {
    margin-top: 50px;
    width: 100%;
    background-color: #ec1525;
    height: 50px;
    color: white;
    font-family: "等线";
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
