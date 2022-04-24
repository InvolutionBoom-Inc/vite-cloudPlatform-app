import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import CourseOutline from "../pages/CourseOutline.vue";
import ClientSourceDownload from "../pages/ClientSourceDownload.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/CourseOutline", name: "CourseOutline", component: CourseOutline },
  {
    path: "/ClientSourceDownload",
    name: "ClientSourceDownload",
    component: ClientSourceDownload,
  },
];
const router = createRouter({ history: createWebHashHistory(), routes });
export default router;
