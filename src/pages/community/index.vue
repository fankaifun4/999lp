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
    background:transparent;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 9999;
    .login_body{
      margin-top:100rpx;
      position: relative;
      width:700rpx;
      height:200rpx;
      background:#fff;
      border:1rpx solid #ccc;
      border-radius: 15rpx;
    }
  }
</style>
<template>
  <div class="container _bc">
    <div>
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

    <div class="login">
      <div class="login_body">
        <button @getuserinfo="getUserInfo"   open-type="getUserInfo" >登录</button>
        <button @click="login"   >store</button>
      </div>
    </div>
  </div>
</template>
<script>
  import store from '../../store/store'
  console.log(store)
  export  default {
    data(){
      return{
        userInfo:null,
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


    },
    methods:{
      login(){
        let _this= this
        store.dispatch('setUserInfo',this.userInfo)
      },
      getUserInfo(){
        let _this=this
        wx.getUserInfo({
          success(res){
            _this.userInfo=res.userInfo
            wx.setStorageSync('userInfo',res.userInfo)
            _this.login()
          },
          fail(res){
            console.log(res)
          }
        })
      }
    },

  }
</script>
