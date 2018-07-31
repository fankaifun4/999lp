<style lang="scss" scoped>
  ._bc{
    background:#f5f5f5;
    overflow: hidden;
  }
  .list-content{
    margin:15rpx;
    background: #fff;
    box-sizing: border-box;
    padding:15rpx;
    border-radius: 10rpx 10rpx 0 0;
  }
  .login{
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:rgba(0,0,0,.4);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 9999;
    .login_body{
      margin-top:100rpx;
      position: relative;
      width:500rpx;
      background:#fff;
      border:1rpx solid #c2c2c2;
      border-radius: 8rpx;
      padding:80rpx 0;
      box-sizing: border-box;
      .logo-wrap{
        padding: 30rpx 0rpx;
        .loginLogo{
          width:280rpx;
          height:203rpx;
          margin:0 auto;
          display: block;
        }
      }
      .login-btn{
        margin:40rpx auto auto;
        height:60rpx;
        width:350rpx;
        line-height: 60rpx;
        font-size: 24rpx;
      }
    }
  }
</style>
<template>
  <div class="container _bc">
    <div class="t-body">
      <div class="list-content">
        <div class="list-header">
          <div>
            <!--<img :src="" alt="">-->
            名字
          </div>
          <div class=""></div>
        </div>
        <div class="list-body">

        </div>
      </div>
    </div>
    <div class="login" v-if="unLogin">
      <div class="login_body">
        <div class="logo-wrap">
          <img class="loginLogo" :src="loginLogo" alt="">
        </div>
        <button class="login-btn" @getuserinfo="getUserInfo"   open-type="getUserInfo" >欢迎来到奇遇的世界</button>
      </div>
    </div>
  </div>
</template>
<script>
  import store from '../../store/store'
  import http from '../../service/http'

  export  default {
    data(){
      return{
        loginLogo:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1533007463&di=f35641ca9b237e4ff9850feb52c164f4&src=http://tv06.tgbusdata.cn/v3/thumb/jpg/ZWZkNCw3MDAsNjAwLDQsMSwxLC0xLDAsZGFuamksOSwwLA==/u/pc.tgbus.com/uploads/allimg/140805/304-140P51Z006.jpg",
        userInfo:null,
        unLogin:false,
        isUnRegest:false,
        list:[
          {
            avatar:"http://img3.imgtn.bdimg.com/it/u=3771389676,3573396865&fm=27&gp=0.jpg",
            nickName:"",
            urls:[],
            cont:""
          }
        ]
      }
    },
    mounted(){
      this.getSetting()
    },
    methods:{
      login(){
        this.unLogin=false
      },
      getUserInfo(){
        wx.getUserInfo({
          success:(res)=>{
            this.userInfo=res.userInfo
            wx.setStorageSync('userInfo',res.userInfo)
            store.dispatch('setUserInfo',this.userInfo)
          },
          fail(res){
            console.log(res)
            this.unLogin=true
            this.isUnRegest=true
          }
        })
      },
      getSetting(){
        wx.getSetting({
          success:(res)=>{
            if(res.authSetting && res.authSetting['scope.userInfo'] ){
              this.unLogin=false
              this.getUserInfo()
            }else{
              this.unLogin=true
            }
          }
        })
      },
    },
  }
</script>
