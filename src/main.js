import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import "../src/assets/style/reset.css";
import * as ElIconModules from "@element-plus/icons-vue";

//全局注册element plus图标库
const app = createApp(App);
const transElIconName = (iconName) => {
  return "i" + iconName.replace(/[A-Z]/g, (match) => "-" + match.toLowerCase());
};
for (let iconName in ElIconModules) {
  app.component(transElIconName(iconName), ElIconModules[iconName]);
}

app.use(router).use(store).mount("#app");
