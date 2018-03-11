<template>
    <div class="captcha">
        <div id="captcha-box">
            <img :src="imgCaptchaUrl" @click="reloadImgCaptcha"/>
            <mu-icon id="captcha-icon" title="声音验证码" value="headset_black" @click="reloadVoiceCaptcha"/>
            <audio :src="audioCaptchaUrl" autoplay="autoplay" hidden="hidden"></audio>
        </div>
    </div>
</template>
<script>
    import * as RouterPath from 'constants/RouterPaths'
    import * as API from 'constants/API'
    export default {
        name: 'captcha',
        data() {
            return {
                imgCaptchaUrl:      API.API_GET_IMG_CAPTCHA + new Date().getTime(),
                audioCaptchaUrl:    ''
            }
        },
        methods: {
            //验证码单次使用
            reloadImgCaptcha: function() {
                this.imgCaptchaUrl   = API.API_GET_IMG_CAPTCHA + new Date().getTime();
            },
            reloadVoiceCaptcha: function() {
                this.audioCaptchaUrl = API.API_GET_VOICE_CAPTCHA + new Date().getTime();
            }
        }
    }
</script>
<style scoped lang="less">
    #captcha-icon {
        width: 24px;
    }
    #captcha-box {
        display: inline-block;
    }
</style>