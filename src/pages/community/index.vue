<style lang="scss" scoped>
@import '../../../static/style/config.scss';
  ._bc{
    background:$white_s;
    position:absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
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
        .login-logo{
          width:280rpx;
          height:203rpx;
          margin:0 auto;
          display: block;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .login-btn{
        margin:40rpx auto auto;
        height:60rpx;
        width:350rpx;
        line-height: 60rpx;
        font-size: 24rpx;
        background: #0ab143;
        color: #fff;
      }
    }
  }
  .t-body{
    height: 100%;
    overflow: hidden;
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
      font-size: 28px;
      font-weight: 300;
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
  .publish{
    position: fixed;
    z-index: 600;
    width:80px;
    height: 80px;
    right: 30px;
    bottom:80px;
    background:#fff;
    border-radius: 50%;
    border:1px solid #f00;
    img{
      width:100%;
      height: 100%;
    }
  }
</style>
<template>
  <div class="container _bc">
    <div class="login" v-if="unLogin">
      <div class="login_body">
        <div class="logo-wrap">
          <div class="login-logo">
            <img  src="/static/imgs/qiyu_logo.jpg" alt="">
          </div>
        </div>
        <button class="login-btn" open-type="getUserInfo" @getuserinfo="loginData"  >登录</button>
      </div>
    </div>
    <div class="publish" @click="publish" v-if="false">
      <img src="/static/imgs/add.png" alt="">
    </div>
    <no-data v-if="nodata"></no-data>
    <scroll-view  scroll-y  class="scroll-wrap" :scroll-with-animation="true"  lower-threshold="50"
                  @scrolltolower="getData"
                  @scrolltoupper="uploadData"
    >
      <Loading-dom  :isShow="uplodaer" ></Loading-dom>
      <div class="ct-list" v-for="(item,index) in playerXd" :key="index" >
          <div class="ct-list-header comm-cnt">
            <div class="title">
              <div> {{item.createtime}} </div>
            </div>
            <div class="action" v-if="false">
              <div class="zan">
                <img v-if="item.isSupport" src="/static/imgs/icon/icon_sc.png" alt="">
                <img v-else   src="/static/imgs/icon/nom.png" alt=""  @click="addZan(item)"  >
                {{item.zan}}
              </div>
            </div>
          </div>
          <div class="list-body">
            <div class="task-titles ts-d pd-tb15 fs-b" @click="goDetailPath(item)">{{item.title}}</div>
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
      <Loading-dom  :isShow="loading" ></Loading-dom>
    </scroll-view>
  </div>
</template>
<script>
  import {getCommunity} from '../../server/home'
  import {addZan} from '../../server/community'
  import {loginWx} from '../../server/login'
  import LoadingDom from '@/components/loading'
  import noData from '../../components/noData'
  export  default {
    components:{
      LoadingDom,
      noData
    },
    data(){
      return{
        loginLogo:"/static/imgs/qiyu_logo.jpg",
        userInfo:null,
        unLogin:false,
        isUnRegest:false,
        page:1,
        list:[],
        playerXd:[],
        loading:false,
        uplodaer:false,
        nodata:false
      }
    },
    mounted(){
      this.getData()
    },
    methods:{
      uploadData(){
        if( this.uplodaer ) return
        this.uplodaer=true
        getCommunity({page:1},(err,res)=>{
          if(err){
            this.nodata=true
            return
          }
          setTimeout(()=>{
            this.uplodaer=false
            if(!res) return
            let data = res.data
            if(data.info && data.info.length){
              this.nodata=false
              this.playerXd =data.info
            }
          },800)
        })
      },
      publish(){
        if(wx.getStorageSync('token')){
          wx.navigateTo({
            url:"/pages/publish/main"
          })
        }else{
          this.getSetting()
        }
      },
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
        if( this.loading ) return
        this.loading=true
        getCommunity({page:this.page},(err,res)=>{
          if(err){
            this.nodata=true
            return
          }
          setTimeout(()=>{
           this.loading=false
            let data = res.data
            if(data.info && data.info.length){
              this.nodata=false
              this.playerXd =this.playerXd.concat(data.info)
              this.page+=1
            }
          },500)
        })
      },
      addZan(model){
        if(wx.getStorageSync('token')){
          if( model.isSupport ) return
          addZan({id:model.id,master:model.uid},(er,res)=>{
            if(res.data.code ===1){
              model.zan+=1
              model.isSupport = true
            }
          })
        }else{
          this.getSetting()
        }
      }
    }
  }
</script>
