<template>
    <div class="essay_list">
        <mu-list>
            <template v-for="item in list">
                <mu-card>
                    <mu-card-title class="essay_list_title" :title="item.EssayTitle" :subTitle="item.CreateUser + ' ' + item.CreateTime" @click.native="clickEssayTitle(item.EssayId)"/>
                    <mu-card-text>
                        {{item.EssayContent}}
                    </mu-card-text>
                    <mu-divider />
                    <mu-card-actions>
                        <div v-for="wish in item.Ext">
                            <div v-if="wish">
                                <mu-badge :content="wish.WishContent" slot="after" primary/>
                            </div>
                        </div>
                    </mu-card-actions>
                </mu-card>
            </template>
        </mu-list>
        <mu-pagination :total="sum" :current="curpage" :pageSize="perpage" @pageChange="handleClick"></mu-pagination>
    </div>
</template>
<script>
    import * as API from 'constants/API'
    import * as Util from 'assets/Util'
    import * as RouterPath from 'constants/RouterPaths'
    import Vue from 'assets/EventBus'
    export default {
        name: 'essay_list',
        data() {
            return {
                sum: 0,
                curpage: 1,
                perpage: 20,
                list: [],
            }
        },
        methods: {
            handleClick (newIndex) {
                this.curpage = newIndex
                this.getEssayList(this)
            },
            getEssayList: (self) => {
                Vue.$http.get(API.API_ESSAY_LIST + '/1', this.$data, {
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
                        self.sum = ret.result.count
                        self.list = []
                        for (let i in ret.result.list) {
                            ret.result.list[i].CreateTime = Util.TimestampToTime(ret.result.list[i]['CreateTime'])
                            self.list.push(ret.result.list[i])
                        }
                    })
                    .catch(function (response) {
                        console.log(response)
                    })
            },
            clickEssayTitle(essayId) {
                // 用于跳转
                this.$router.push({path: RouterPath.PAGES_ESSAY_INFO + '/' + essayId})
            },
        },
        mounted(){
            this.getEssayList(this)
        }
    }
</script>
<style scoped lang="less">
    .essay_list {
        width: 100%;
        overflow: auto;
        /*-webkit-overflow-scrolling: touch;*/
        .mu-list {
            .mu-card {
                margin-right: 2px;
                margin-left: 2px;
                margin-bottom: 10px;
            }
        }
        .mu-pagination {
            position: absolute;
            left: 50%;
            transform: translate(-50%);
        }
        .essay_list_title {
            cursor: pointer;
        }
    }
</style>