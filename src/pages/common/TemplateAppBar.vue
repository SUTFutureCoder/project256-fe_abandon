<template>
    <mu-appbar>
        <div class="appbar-title-title"><a slot="left">Project 256</a></div>
        <mu-flat-button color="white" label="文章" slot="right" @click="redirect(essay)"/>
        <mu-flat-button color="white" label="关于" slot="right" @click="redirect(info)"/>
        <!--<mu-flat-button color="white" v-if="loged" :label="msg" @click="redirect(routerLogin)"/>-->
    </mu-appbar>
</template>
<script>
    import * as RouterPath from 'constants/RouterPaths'
    export default {
        name: 'common',
        data() {
            return {
                essay: RouterPath.PAGES_ESSAY_LIST,
                info:  RouterPath.PAGE_INFO,
            }
        },
        methods: {
            redirect: id => {
                this.$router.push({path: id})
            }
        }
    }
</script>
<style scoped lang="less">
    .mu-appbar {
        position: fixed;
        overflow: hidden;
        top: 0;
        .appbar-title-title{
            float: left;
            /*margin-left: 20px;*/
            a {
                color: #FFF;
            }
        }
    }
</style>