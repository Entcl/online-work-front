import Router from "vue-router";
import Vue from "vue";
Vue.use(Router);

import LoginPage from '@/components/LoginPage';
import BackHome from '@/components/BackHome';
import MemberList from '@/components/Member/MemberList'
import MemberLevel from '@/components/Member/MemberLevel'
import NotFound from '@/components/NotFound'

export default new Router({
    routes: [{
            name: 'login',
            path: '/login',
            component: LoginPage
        }, {
            name: 'Index',
            path: '/',
            component: LoginPage
        },
        {
            name: 'BackHome',
            path: '/backHome/:userName',
            component: BackHome,
            children: [{
                    name: 'MemberLevel',
                    path: '/member/level/:id',
                    component: MemberLevel,
                    props: true
                },
                {
                    name: 'MemberList',
                    path: '/member/list',
                    component: MemberList
                },
            ]
        },
        {
            name: "BackLogin",
            path: '/goLogin/:userName',
            redirect: "/LoginPage/:userName"
        },
        {
            name: "Logout",
            path: '/logout',
            component: LoginPage
        },
        {
            name: "ToBackHome",
            path: '/gobackHome/:userName',
            redirect: "/backHome/:userName"
        },
        {
            name: "NotFound",
            path: '*',
            component: NotFound
        },
    ]

})