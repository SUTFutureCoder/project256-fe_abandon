<template>
  <div id="index">
    <top v-if="show_top == true"></top>
    <feed></feed>
  </div>
</template>
<script>
    import Top from 'pages/common/TemplateAppBar'
    import Feed from 'pages/feed/Feed'
    import * as API from 'constants/API'
    import * as RouterPaths from 'constants/RouterPaths'

    export default {
        name: 'index',
        data() {
            return {
                essay_list: [],

                show_top: true,
            }
        },
        methods: {
            loginExec: function () {

            },
            regExec: function () {
            }

        },
        components: {
            Top,
            Feed,
        }
    }
</script>
<style scoped lang="less">
  .feed{
    width: 90%;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 10px;
  }
</style>