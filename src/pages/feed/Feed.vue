<template>
    <div class="feed">
        <div class="feed-item" v-for="feed in feed_data">
            <mu-card class="feed-card" style="width: 100%; margin: 0 auto;" @click.native="clickFeedTitle(feed.FeedType, feed.ReId)">
                <mu-card-header :title="feed.Ext.user_info.user_name" :sub-title="feed.Ext.user_info.user_sign">
                    <mu-avatar slot="avatar">
                        <img :src="feed.Ext.user_info.user_avatar">
                    </mu-avatar>
                </mu-card-header>
                <mu-card-title :title="feed.FeedData" :sub-title="feed.CreateTime + ' ' + feed.FeedOp"></mu-card-title>
            </mu-card>
        </div>
    </div>
</template>
<style scoped lang="less">
    .feed {
        .feed-item {
            margin-bottom: 20px;
            .mu-card-header {
                padding-bottom: 0;
            }
        }
    }
</style>
<script>
    import * as API from 'constants/API'
    import 'constants/Const'
    import * as RouterPath from 'constants/RouterPaths'
    import * as Util from 'assets/Util'
    import Vue from 'assets/EventBus'
    import Const from "src/constants/Const"
    export default {
        name: 'feed',
        data() {
            return {
                feed_data: [],
            }
        },
        methods: {
            redirect: feed => {
                // 通过点击动态，跳转到实际的心愿或文章中
                this.$router.push({path: feed})
            },
            clickFeedTitle(feedType, reId)  {
                switch (feedType) {
                    case Const.TYPE_ESSAY:
                        this.$router.push({path: RouterPath.PAGES_ESSAY_INFO + '/' + reId})
                        break;
                }
            },
            getFeedList: (self) => {
                Vue.$http.get(API.API_FEED, this.$data, {
                    emulateJSON: true
                })
                    .then((response) => {
                        let ret = response.body
                        if (ret['error_no'] != 0) {
                            console.log(ret)
                            return
                        }
                        if (ret.length == 0) {
                            return
                        }
                        for (let i in ret.result) {
                            ret.result[i].CreateTime = Util.TimestampToTime(ret.result[i]['CreateTime'])

                            switch (ret.result[i].FeedType) {
                                case Const.TYPE_ESSAY:
                                    ret.result[i].FeedOp = '发表了一篇文章'
                                    break;
                                case Const.TYPE_WISH:
                                    ret.result[i].FeedOp = '许了一个心愿'
                                    break;
                                case Const.TYPE_SUBSCRIBE:
                                    ret.result[i].FeedOp = '订阅了一位大佬'
                                    break;
                                case Const.TYPE_UNSUBSCRIBE:
                                    ret.result[i].FeedOp = '取关了一位大佬'
                                    break;
                            }

                            self.feed_data.push(ret.result[i])
                        }
                    })
                    .catch(function (response) {
                        console.log(response)
                    })
            }
        },
        mounted(){
            this.getFeedList(this)
        }
    }
</script>
<style scoped lang="less">
    .feed {
        .feed-item {
            .feed-card {
                cursor: pointer;
            }
        }
    }
</style>