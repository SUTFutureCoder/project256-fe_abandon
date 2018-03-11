<template>
  <div id="index">
    <top v-if="show_top == true"></top>
    
  </div>
</template>
<script>
    import Top from 'pages/common/TemplateAppBar'
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
                this.$http.post(API.API_ESSAY_LIST, this.$data, {
                    emulateJSON: true
                })
                    .then((response) => {
                        var ret = response.body
                        if (ret['error_no'] != 0) {
                            alert(ret['error_msg'])
                            this.reg_phone_captcha_send = false
                        }
                    })
                    .catch(function (response) {
                        console.log(response)
                    })
            },
            regExec: function () {
            }

        },
        components: {
            Top,
        }
    }
</script>
<style scoped lang="less">
  .mu-card{
    width: 90%;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 10px;
    text-align: center;
  }
  .mu-card-media{
    position: relative;
    margin: 50px auto;

    #card-input-box{
      position: relative;

      .mu-text-field{
        margin-left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .mu-card-actions{
    margin: 0 auto;
    width: 256px;
  }
  .mu-raised-button{
    width: 100%;
  }
  .captcha {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
</style>