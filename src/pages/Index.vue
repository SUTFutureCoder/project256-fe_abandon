<template>
  <div id="index">
    <feed></feed>
  </div>
</template>
<script>
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
            Feed,
        }
    }
</script>