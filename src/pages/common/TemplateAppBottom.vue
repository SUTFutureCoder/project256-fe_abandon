<template>
    <mu-appbar title="测试头部">
        <div class="appbar-title-img"><img src="~assets/img/DoorGod.png"></div>
        <div class="appbar-title-title"><a slot="left">门神</a></div>
        <mu-flat-button color="white" label="登录/注册" slot="right"/>
        <mu-flat-button color="white" label="接入" slot="right"/>
        <mu-flat-button color="white" label="关于" slot="right"/>
        <mu-flat-button color="white" :label="msg" @click="redirect(routerLogin)" slot="right"/>
    </mu-appbar>
</template>
<script>
  import * as RouterPath from 'constants/RouterPaths'
  export default {
    name: 'common',
    data() {
      return {
        msg: 'Hello World',
        routerLogin: RouterPath.PAGES_LOGIN
      }
    },
    methods: {
      redirect: id => {
        switch (id){
          case RouterPath.PAGES_LOGIN:
            alert('tsttst');
            break;
        };
      }
    }
  }
</script>
<style scoped lang="less">
    .mu-appbar {
        position: fixed;
        overflow: hidden;
        top: 0;
    .appbar-title-img {
    img {
        margin-top: 6px;
        height: 50px;
        float: left;
    }
    }
    .appbar-title-title{
        float: left;
        margin-left: 20px;
    a {
        color: #FFF;
    }
    }
    }
</style>