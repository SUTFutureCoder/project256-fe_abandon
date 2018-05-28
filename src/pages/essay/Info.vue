<template>
    <div class="essay_info">
        <div id="essay_info_title"><h1>{{essay_info.EssayTitle}}</h1></div>
        <div id="essay_info_sub_title"><h3>{{essay_info.Ext.user_info.user_name}} {{essay_info.CreateTime}}</h3></div>
        <div id="essay_info_wish"><mu-badge :content="essay_info.Ext.wish_info.WishContent" slot="after" color="primary"/></div>
        <mu-divider/>
        <div id="essay_info_content">
            <div v-if="essay_info.ContentType == Const.CONTENT_TYPE_HTML">
                {{essay_info.EssayContent}}
            </div>
            <div v-else-if="essay_info.ContentType == Const.CONTENT_TYPE_MARKDOWN">
                <vue-markdown>
{{essay_info.EssayContent}}
                </vue-markdown>
            </div>
        </div>
    </div>
</template>
<script>
    import * as API from 'constants/API'
    import Const from 'constants/Const'
    import * as Util from 'assets/Util'
    import Vue from 'assets/EventBus'
    import VueMarkdown from 'vue-markdown'

    export default {
        name: 'essay_info',
        data() {
            return {
                essay_info: {
                    Ext: {
                        user_info: {},
                        wish_info: {},
                    },
                },
                Const: Const,
            }
        },
        methods: {
            getEssayInfo: (self) => {
                Vue.$http.get(API.API_ESSAY_INFO + '/' + self.$route.params.essay_id, this.$data, {
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
                        ret.result.CreateTime = Util.TimestampToTime(ret.result.CreateTime)
                        self.essay_info = ret.result
                    })
                    .catch(function (response) {
                        console.log(response)
                    })
            },
        },
        created: function(){
            this.getEssayInfo(this)
        },
        components: {
            VueMarkdown,
        }
    }
</script>
<style scoped lang="less">
    #essay_info_title, #essay_info_sub_title, #essay_info_time, #essay_info_wish {
        text-align: center;
        h1, h2, h3 {
            margin-top: 5px;
            margin-bottom: 5px;
        }
    }
    #essay_info_wish {
        margin-bottom: 10px;
    }
    #essay_info_content {
        width: 98%;
        margin: 0 auto;
    }
</style>