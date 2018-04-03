<template>
    <div id="page-bottom">
        <a href="https://github.com/SUTFutureCoder/project256" target="_blank">Project256</a><a> ©️{{currentTime}} Created By </a><a href="https://github.com/SUTFutureCoder">FutureCoder</a>
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
            this.currentTime = new Date().getFullYear()
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