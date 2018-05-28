<template>
    <div id="page-bottom">
        <a href="https://github.com/SUTFutureCoder/project256" target="_blank">Project256</a><a> ©2018.05.29️{{currentTime}} Created By </a><a href="https://github.com/SUTFutureCoder">FutureCoder</a>
    </div>
</template>
<script>
    export default {
        name: 'bottom',
        data() {
            return {
                currentTime: 0,
            }
        },
        methods: {
        },
        mounted() {
            // 版权信息
            this.currentTime = new Date().getFullYear()
            if (this.currentTime == 2018) {
                this.currentTime = ''
            } else {
                this.currentTime = ' ~ ' + this.currentTime
            }
        }
    }
</script>
<style scoped lang="less">
    #page-bottom {
        text-align: center;
        width: 100%;
        position: relative;
        margin-top: 40px;
        margin-bottom: 10px;
        a {
            color: #009aee;
        }
    }
</style>