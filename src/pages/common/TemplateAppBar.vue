<template>
    <mu-appbar color="primary">
        <div class="appbar-title-title" slot="left"><a @click="redirect(index)">Project 256</a></div>
        <mu-button flat slot="left" @click="redirect(essay)">文章</mu-button>
        <mu-button flat slot="left" @click="redirect(wish)">心愿</mu-button>
        <mu-button flat slot="left" @click="redirect(info)">关于</mu-button>
        <!--<mu-flat-button color="white" v-if="loged" :label="msg" @click="redirect(routerLogin)"/>-->
    </mu-appbar>
</template>
<script>
    import * as RouterPath from 'constants/RouterPaths'
    export default {
        name: 'common',
        data() {
            return {
                index: RouterPath.PAGES_INDEX,
                essay: RouterPath.PAGES_ESSAY_LIST,
                wish:  RouterPath.PAGES_WISH_LIST,
                info:  RouterPath.PAGES_INFO,
            }
        },
        methods: {
            redirect: function(id) {
                this.$router.push({path: id})
            },

        }
    }
</script>
<style scoped lang="less">
    .mu-appbar {
        position: relative;
        overflow: hidden;
        top: 0;
        width: 100%;
        margin-bottom: 20px;
        .appbar-title-title{
            float: left;
            margin-right: 20px;
            a {
                color: #FFF;
                font-size: x-large;
            }
        }
    }
</style>