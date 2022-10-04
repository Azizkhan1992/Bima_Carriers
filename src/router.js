import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import BimaCarriersLayout from '@/components/dashboard/BimaCarriersLayout'

const routes = [
    {
        path: '/',
        component: BimaCarriersLayout
    },
    {
        path: '/our-command',
        component: ()=> import('@/views/our-command/BimaOurCommand.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;