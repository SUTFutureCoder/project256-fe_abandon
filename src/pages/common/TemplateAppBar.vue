<template>
    <mu-appbar>
        <div class="appbar-title-title" slot="left"><a @click="redirect(index)">Project 256</a></div>
        <mu-flat-button color="white" label="文章" slot="left" @click="redirect(essay)"/>
        <mu-flat-button color="white" label="心愿" slot="left" @click="redirect(wish)"/>
        <mu-flat-button color="white" label="关于" slot="left" @click="redirect(info)"/>
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
                info:  RouterPath.PAGE_INFO,
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
        margin-bottom: 20px;
        .appbar-title-title{
            float: left;
            /*margin-left: 20px;*/
            a {
                color: #FFF;
                font-size: x-large;
            }
        }
    }
</style>