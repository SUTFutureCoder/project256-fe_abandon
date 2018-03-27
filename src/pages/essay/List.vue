<template>
    <div class="essay_list">

    </div>
</template>
<script>
    import * as API from 'constants/API'
    import * as Util from 'assets/Util'
    import Vue from 'assets/EventBus'
    export default {
        name: 'essay_list',
        data() {
            return {
                curpage: 1,
                perpage: 20,
                list: [],
            }
        },
        methods: {
            getEssayList: (self) => {
                Vue.$http.get(API.API_ESSAY_LIST + '/1', this.$data, {
                    emulateJSON: true
                })
                    .then((response) => {
                        let ret = response.body
                        console.log(ret)
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
            this.getEssayList(this)
        }
    }
</script>