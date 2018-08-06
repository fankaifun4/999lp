<style lang="scss" scoped>
@import '../../../static/style/config.scss';

  ._bc{
    background:$white_s;
    overflow: hidden;
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
      border:1rpx solid $black_z;
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
  .t-body{
    height: 100%;
    overflow: scroll;
  }
  .ct-list{
    margin-bottom:20rpx;
  }

  .comm-cnt{
    justify-content: space-between;
    align-items: center;
    .title{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .avart{
        width:81rpx;
        height:81rpx;
        overflow: hidden;
        border-radius: 50%;
      }
    }
    .action{
      font-weight: 300;
      .follow{
        border:1rpx solid $orange_m;
        color:$orange_m;
        height:50rpx;
        line-height: 50rpx;
        padding:0 25rpx;
        border-radius: 25rpx;
      }
    }
  }

</style>
<template>
  <div class="container _bc">
    <div class="login" v-if="unLogin">
      <div class="login_body">
        <div class="logo-wrap">
          <img class="loginLogo" :src="loginLogo" alt="">
        </div>
        <button class="login-btn" @getuserinfo="getUserInfo"   open-type="getUserInfo" >欢迎来到奇遇的世界</button>
      </div>
    </div>

    <div class="t-body">
      <div>
        <div class="ct-list" v-for="(item,index) in playerXd" :key="index" >
          <div class="ct-list-header comm-cnt">
            <div class="title">
              <img class="avart mr-20" src="/static/imgs/qiyu_logo.jpg" alt="">
              {{item.name}}
            </div>
            <div class="action">
              <div class="follow">关注</div>
            </div>
          </div>
          <div class="list-body" >
            <div class="task-titles ts-d pd-tb15" @click="goDetailPath(item)">{{item.title}}</div>
            <div class="task-show-img" >
              <div class="lg-left" :class="{flex1:item.img.length<2}" @click="lookoutImg(item.img[0],item.img)">
                <img mode="aspectFill" :src="item.img[0]" alt="">
              </div>
              <div class="lg-right" v-if="item.img.length>1">
                <div class="img-r" :class="{'height-cover':item.img.length==2}" v-if="item.img.length>1"   @click="lookoutImg(item.img[1],item.img)" ><img  mode="aspectFill" :src="item.img[1]" alt=""></div>
                <div class="img-r" v-if="item.img.length>2"  @click="lookoutImg(item.img[2],item.img)"><img  mode="aspectFill" :src="item.img[2]" alt=""  ></div>
              </div>
            </div>
          </div>
        </div>
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
        loginLogo:"static/imgs/qiyu_logo.jpg",
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
        ],
        playerXd:[
          {
            name:"饭饭",
            title:"逆水寒载酒行者奇遇任务攻略",
            _id:"11",
            _type:1,
            img:[
              "http://img.52z.com/upload/news/image/20180612/20180612035819_37029.png",
              "http://img.52z.com/upload/news/image/20180612/20180612035832_83774.png",
              "http://img.52z.com/upload/news/image/20180612/20180612035841_72919.png",
              "http://img.52z.com/upload/news/image/20180712/20180712020143_91253.png",
              "http://img.52z.com/upload/news/image/20180712/20180712020143_91253.png",
              "http://img.52z.com/upload/news/image/20180712/20180712020143_91253.png"
            ]
          },
          {
            name:"饭饭",
            title:"逆水寒八奇珍宝奇遇任务攻略",
            _id:"12",
            _type:1,
            img:[
              "http://img.52z.com/upload/news/image/20180712/20180712020143_91253.png",
              "http://img.52z.com/upload/news/image/20180612/20180612035832_83774.png",
              "http://img.52z.com/upload/news/image/20180612/20180612035841_72919.png"
            ]
          },
          {
            name:"饭饭",
            title:"逆水寒八奇珍宝奇遇任务攻略",
            _id:"12",
            _type:1,
            img:[
              "http://img.52z.com/upload/news/image/20180712/20180712020143_91253.png",
              "http://img.52z.com/upload/news/image/20180612/20180612035832_83774.png",
              "http://img.52z.com/upload/news/image/20180612/20180612035841_72919.png"
            ]
          },
          {
            name:"饭饭",
            title:"逆水寒八奇珍宝奇遇任务攻略",
            _id:"12",
            _type:1,
            img:[
              "http://img.52z.com/upload/news/image/20180712/20180712020143_91253.png",
              "http://img.52z.com/upload/news/image/20180612/20180612035832_83774.png",
              "http://img.52z.com/upload/news/image/20180612/20180612035841_72919.png"
            ]
          }
        ]
      }
    },
    mounted(){
      // this.getSetting()
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
            this.login()
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
      lookoutImg(cur,imgs){
        wx.previewImage({
          current:cur,
          urls:imgs
        })
      },
      goDetailPath(item){
        wx.navigateTo({
          url:"/pages/communityDetail/main?taskName="+item.name+'&_id='+item._id+'&type='+item._type
        })
      }
    }
  }
</script>
