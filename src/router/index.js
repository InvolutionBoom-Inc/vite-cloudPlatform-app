import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import CourseOutline from '../pages/CourseOutline.vue';
import ClientSourceDownload from '../pages/ClientSourceDownload.vue';
import OnlineHomework from '../pages/OnlineHomework.vue';

const routes = [
    { path: '/Home', name: 'Home', component: Home },
    { path: '/CourseOutline', name: 'CourseOutline', component: CourseOutline },
    {
        path: '/ClientSourceDownload',
        name: 'ClientSourceDownload',
        component: ClientSourceDownload,
    },
    {
        path: '/OnlineHomework',
        name: 'OnlineHomework',
        component: OnlineHomework,
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/Home',
    },
];

const router = createRouter({ history: createWebHashHistory(), routes });

router.beforeEach((to, from) => {});
export default router;
