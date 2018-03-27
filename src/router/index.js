import Vue from 'vue'
import Router from 'vue-router'
import * as RouterPath from 'constants/RouterPaths'
import Index from 'pages/Index'

import EssayInfo from 'pages/essay/Info'
import EssayList from 'pages/essay/List'
import EssayWrite from 'pages/essay/Write'

import Info from 'pages/info/Info'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: RouterPath.PAGES_INDEX,
            component: Index
        },
        // 文章
        {
            path: RouterPath.PAGES_ESSAY_INFO,
            component: EssayInfo
        },
        {
            path: RouterPath.PAGES_ESSAY_WRITE,
            component: EssayWrite
        },
        {
            path: RouterPath.PAGES_ESSAY_LIST,
            component: EssayList
        },
        // 心愿

        // 关于
        {
            path: RouterPath.PAGES_INFO,
            component: Info,
        }
    ]
})
