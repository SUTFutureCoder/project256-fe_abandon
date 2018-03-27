<template>
    <div class="feed">
        <mu-timeline>
            <mu-timeline-item v-for="(feed, key) in feed_data">
                <span slot="time">{{feed.Ext.user_info.user_name}} {{feed.CreateTime}}</span>
                <span slot="des">{{feed.FeedData}}</span>
            </mu-timeline-item>
        </mu-timeline>
    </div>
</template>
<script>
    import * as API from 'constants/API'
    import * as Util from 'assets/Util'
    import Vue from 'assets/EventBus'
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