<template>
    <div id="audit_app_bar">
        <mu-appbar title="门神Alpha - 个人中心">
            <mu-flat-button icon="menu" @click="toggle" slot="left"/>
        </mu-appbar>
        <mu-drawer :open="open" :docked="docked" @close="toggle()">
            <mu-list @itemClick="docked ? '' : toggle()">
                <mu-sub-header>用户</mu-sub-header>
                <mu-list-item title="我的信息" @click="change_route(RouterPath.PAGES_AUDIT_ME)"/>
                <mu-list-item title="授权应用" @click="change_route(RouterPath.PAGES_AUDIT_AUTHORIZED)"/>
                <mu-list-item title="隐私设置" @click="change_route(RouterPath.PAGES_AUDIT_PRIVATE)"/>
                <mu-sub-header>开发者</mu-sub-header>
                <mu-list-item title="申请加入" @click="change_route(RouterPath.PAGES_AUDIT_DEV_APPLY)"/>
                <mu-list-item title="SDK" @click="change_route(RouterPath.PAGES_AUDIT_DEV_SDK)"/>
                <mu-list-item title="接入列表" @click="change_route(RouterPath.PAGES_AUDIT_DEV_APP)"/>
                <mu-list-item title="开发者设置" @click="change_route(RouterPath.PAGES_AUDIT_DEV_SETTING)"/>
            </mu-list>
        </mu-drawer>
    </div>
</template>
<script>
    import Bus from 'assets/EventBus'
    import * as RouterPath from 'constants/RouterPaths'
    export default {
        data() {
            return {
                open: true,
                docked: false,
                RouterPath: RouterPath,
            }
        },
        methods: {
            change_route: function (router_path){
//                Bus.$emit('audit_change_router', 'Do you like 玩♂游♂戏');
                //切换高亮选中
                Bus.$emit('audit_change_router', router_path);
            },
            toggle: function (flag) {
                this.$data.open = !this.$data.open
                this.$data.docked = !flag
            }
        },
    }
</script>