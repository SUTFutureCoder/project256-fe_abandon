<template>
    <div class="info">
        <video id="video" loop autoplay><source src="https://project256.oss-cn-beijing.aliyuncs.com/video/stars.mp4" /></video>
        <div class="info-markdown">
            <vue-markdown>

# Dear All My Friends
## Welcome
欢迎来到我人生中第一个博客
断断续续开发了一年，中间经历了太多的事情
不过很幸运，能够在我的生日带着祝福和期待诞生在这个互联网世界上
## Why
如同域名所示，我将在我的职业生涯中完成256个项目尝试
这些项目可能会有脑洞大开的Moonshot Project
亦会有简单入门的Hello World
在尝试过程中，将坑和心得记录在这个博客中
当然不只局限技术，读书、写作、心理、音乐、摄影、绘画其他领域都会涉及
另外我将“Tag”的概念变换为“心愿”
由【心愿】驱动着成长，是不是很美好？
成长的天花板？不存在的！
## Tech
这个博客后端尝试使用了GO语言的gin框架
因为抛弃了PHP框架和积累的基础库，所以开发比较吃力
但这个框架只提供了路由，所以能够最大程度地深入练习这门语言
没错，这个项目不仅是具有战略意义，而且为自己提供了非常好的刻意练习平台
前端是Vue框架、Muse-ui系列组件
存储使用MySQL和Redis
技术栈大概这些，暂时不准备引入其他的组件
## Future
我也构想了很多这个博客的未来
包括针对项目、书籍、相册、音乐之类的定制化界面
后期接入我正在填坑的Oauth2平台
其他的中间件比如埋点、监控、部署平台也会尝试自给自足
可能目前界面丑陋、功能不全
但在完善的时候肯定会有一番趣味
如果发现任何问题或是反馈，欢迎提出[后端ISSUE](https://github.com/SUTFutureCoder/project256/issues)，[前端ISSUE](https://github.com/SUTFutureCoder/project256-fe/issues)
## 最后
你有要实现的梦想么
即使没有过人天赋，也不被周围看好。但至少能有一个自由记录技术成长的地方，相信无数次刻意练习会有收获，若干年后肯定会感激现在努力的你。
## 这里看得见你的光芒


非常感谢各位一直以来的支持


*Chen
2018.05.29


            </vue-markdown>
        </div>
    </div>
</template>
<script>
    import VueMarkdown from 'vue-markdown'

    export default {
        name: 'info',
        data() {
            return {
            }
        },
        methods: {
            t: function () {

            }
        },
        components: {
            VueMarkdown,
        }
    }
</script>
<style scoped lang="less">
    .info {
        #video {
            top: 0;
            right: 0;
            bottom: 0;
            min-width: 100%;
            min-height: 100%;
            position: fixed;
            z-index: -1;
        }
        .info-markdown {
            position: relative;
            color: #FFF;
        }
    }
</style>