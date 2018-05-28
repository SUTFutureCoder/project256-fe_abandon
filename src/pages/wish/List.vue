<template>
    <div class="wish_list">
        <mu-list>
            <mu-row class="make_a_wish" justify-content="center">
                <mu-flex justify-content="center" >
                    <mu-text-field id="make_a_wish_text" label="许个愿望吧" :value="makeAWish" labelFloat />
                </mu-flex>
            </mu-row>
            <mu-row class="wish_col" v-for="item in list">
                <mu-chip class="wish_chip_1" color="blue" @delete="handleClose" showDelete>
                    {{item.WishContent}}
                </mu-chip>
            </mu-row>
        </mu-list>
    </div>
</template>
<script>
    import * as API from 'constants/API'
    import * as Util from 'assets/Util'
    import * as RouterPath from 'constants/RouterPaths'
    import Vue from 'assets/EventBus'
    export default {
        name: 'wish_list',
        data() {
            return {
                parentWishId: [],
                makeAWish: "",
                list: [],
            }
        },
        methods: {
            handleClose () {
                alert("")
            },
            getWishList: (self) => {
                Vue.$http.get(API.API_WISH_LIST + '/1', this.$data, {
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

                        for (let i in ret.result.wish_list) {
                            ret.result.wish_list[i].CreateTime = Util.TimestampToTime(ret.result.wish_list[i]['CreateTime'])
                            self.list.push(ret.result.wish_list[i])
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
            this.getWishList(this)
        }
    }
</script>
<style scoped lang="less">
    .wish_list {
        .make_a_wish {
            #make_a_wish_text {
                float: left;
            }
            #make_a_wish_select {
                margin-left: 10px;
            }
        }
        .wish_col {
            margin-top: 10px;
        }
    }
</style>