<style lang="scss" scoped>
@import '../../../static/style/config.scss';

  ._bc{
    background:$white_s;
    min-height: 100%;
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
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .follow{
        border:1rpx solid $orange_m;
        color:$orange_m;
        height:50rpx;
        line-height: 50rpx;
        padding:0 25rpx;
        border-radius: 25rpx;
      }
      .zan{
        height:80rpx;
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img{
          width:40rpx;
          height:40rpx;
          margin-right:10px;
        }
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
        <button class="login-btn" @getuserinfo="loginData"   open-type="getUserInfo" >欢迎来到奇遇的世界</button>
      </div>
    </div>
    <div class="t-body">
      <div>
        <div class="ct-list" v-for="(item,index) in playerXd" :key="index" >
          <div class="ct-list-header comm-cnt">
            <div class="title">
              <img class="avart mr-20" :src="item.avatar" alt="">
              {{item.nickname}}
            </div>
            <div class="action" refs="tt">
              <div class="zan">
                <img v-if="item.isSupport" src="/static/imgs/icon/icon_sc.png" alt="">
                <img v-else   src="/static/imgs/icon/nom.png" alt=""  @click="addZan(item)" >
                {{item.zan}}
              </div>
            </div>
          </div>
          <div class="list-body">
            <div class="task-titles ts-d pd-tb15" @click="goDetailPath(item)">{{item.title}}</div>
            <div class="task-show-img" v-if="item.imgs.length" >
              <div class="lg-left" :class="{flex1:item.imgs.length<2}" @click="lookoutImg(item.imgs[0],item.imgs)">
                <img mode="aspectFill" :src="item.imgs[0]" alt="">
              </div>
              <div class="lg-right" v-if="item.imgs.length>1">
                <div class="img-r" :class="{'height-cover':item.imgs.length==2}" v-if="item.imgs.length>1"   @click="lookoutImg(item.imgs[1],item.imgs)" ><img  mode="aspectFill" :src="item.imgs[1]" alt=""></div>
                <div class="img-r" v-if="item.imgs.length>2"  @click="lookoutImg(item.imgs[2],item.imgs)"><img  mode="aspectFill" :src="item.imgs[2]" alt=""  ></div>
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
  import {getCommunity} from '../../server/home'
  import {addZan} from '../../server/community'
  import {loginWx} from '../../server/login'
  import loading from '@/components/loading'
  export  default {
    components:{
      loading
    },
    data(){
      return{
        loginLogo:"/static/imgs/qiyu_logo.jpg",
        userInfo:null,
        unLogin:false,
        isUnRegest:false,
        loading:true,
        page:1,
        list:[
          {
            avatar:"http://img3.imgtn.bdimg.com/it/u=3771389676,3573396865&fm=27&gp=0.jpg",
            nickName:"",
            urls:[],
            cont:""
          }
        ],
        playerXd:[]
      }
    },
    mounted(){
      // this.getSetting()
      this.getData()
    },
    methods:{
      loginData(){
        let _this=this
        loginWx.getData(function(er,res){
          if( er ){
            _this.unLogin=false
            wx.showModal({
              content:"登录失败"
            })
          }else{
            wx.setStorageSync('token',res.data.info.token)
            _this.unLogin=false
          }
        })
      },
      getSetting(){
        wx.getSetting({
          success:(res)=>{
            if(res.authSetting && res.authSetting['scope.userInfo'] ){
              this.unLogin=false
              this.loginData()
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
          url:"/pages/communityDetail/main?_id="+item.id+'&type='+item._type
        })
      },
      getData(){
        wx.showLoading()
        getCommunity({page:this.page},(err,res)=>{
          wx.hideLoading()
          setTimeout(()=>{
            wx.stopPullDownRefresh()
            let data = res.data
            if(data.info && data.info.length){
              this.playerXd =this.playerXd.concat(data.info).reverse()
              this.page+=1
            }
          },400)
        })
      },
      addZan(model){
        if(wx.getStorageSync('token')){
          if( model.isSupport ) return
          addZan({id:model.id,master:model.username},(er,res)=>{
            if(res.data.code ===1){
              model.zan+=1
              model.isSupport = true
            }
          })
        }else{
          this.getSetting()
        }
      }
    },
    onPullDownRefresh(){
      this.getData()
    }
  }
</script>
