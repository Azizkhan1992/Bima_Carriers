import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// import BimaCarriersLayout from '@/components/dashboard/BimaCarriersLayout'

const routes = [
    {
        path: '/',
        component: () => import('@/components/dashboard/BimaCarriersLayout'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/content/BimaCarriersContent')
            },
            {
                path: '/our-group',
                component: () => import('@/views/our-command/BimaOurCommand')
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;