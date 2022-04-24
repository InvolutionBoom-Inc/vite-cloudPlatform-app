import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
//引入自动import依赖包
import AutoImport from "unplugin-auto-import/vite";
//引入自动import组件
import Components from "unplugin-vue-components/vite";
//element解析器
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  //配置(注册)全局插件
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  base: "/vite-cloudPlatform-app/",
});
