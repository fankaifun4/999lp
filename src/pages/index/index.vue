<style lang="scss" scoped>
.mg-t18{
  margin-top: 18rpx;
}
.index-wrap{
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  overflow-x: hidden;
  display: block;
  .banner{
    background:#fff;
  }
  .index-nav{
    position:relative;
    top:-90rpx;
    margin:0 15rpx;
    background: #fff;
    border-radius: 10rpx 10rpx 0 0;
    overflow: hidden;
    border-bottom:2rpx solid #ccc;
  }
  .content{
    padding:0 20rpx;
    position:relative;
    margin-bottom:20rpx;
    .list-body{
      padding:0 20rpx 20rpx 20rpx;
      border-bottom:1px solid #f5f5f6;
      .list-body-title{
        font-size: 30px;
        padding:15px 0;
      }
      .list-body-items{
        font-size: 30px;
        padding:15px 0;
      }
    }
    .content-list{
      border-radius:10rpx 10rpx 0 0;
      border-bottom:1rpx solid #ccc;
      position:relative;
      background:#fff;
      .list-header{
        font-size:32rpx;
        color:#000;
        padding:20rpx 15rpx;
        border-bottom:1rpx solid #f5f5f5;
        font-weight: 700;
        letter-spacing: 2rpx;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .icon{
          width:32rpx;
          height:32rpx;
          margin-right:8rpx;
        }
      }
      .list{
        border-bottom:2rpx solid #f5f5f5;
        padding:20rpx 0;
        margin-bottom: 20rpx;
        .show-pic{
          height:300rpx;
          border:1px solid #ccc;
          border-radius: 15rpx;
          overflow: hidden;
          flex-shrink: 0;
          >img{
            width:100%;
            height:100%;
          }
        }
        .show-cont{
          margin-left:20rpx;
          font-size:32rpx;
          margin-bottom:20px;
        }
      }
      .show-top{
        height:200rpx;
        padding:20rpx 0;
        overflow: hidden;
        >img{
          width:100%;
          height: 100%;
          border-radius: 10rpx;
        }
      }
      .show-bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .show-list{
          flex: 1;
          height:100rpx;
          &:first-child{
            margin-right: 20rpx;
          }
          >img{
            border-radius: 10rpx;
            width:100%;
            height:100%;
          }
        }
      }
    }
  }
}

.footer-bar{
  height:100rpx;
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  background:#333;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items:center;
  .footer-list{
    flex:1;
    display: flex;
    justify-content:center;
    align-items:center;
    font-size: 26rpx;
    color:#fff;
    &:first-child{
      border-right:1px solid #fff;
    }
    img{
      width:80rpx;
      height:80rpx;
    }
  }
}
.ls-list{
  margin:15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: #fff;
  box-sizing: border-box;
  .ls-item-wrap{
    &:first-child{
      margin-right:15px;
    }
    .ls-li{
      overflow: hidden;
      margin-top:20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      .ls-img-wrap{
        width:100%;
        overflow: hidden;
        border-radius:10px 10px 0  0;
      }
      .ls-txt-wrap{
        width:100%;
        min-height: 80px;
        border:1px solid #e5e5e6;
        padding:20px 10px;
        border-top:none;
        box-sizing: border-box;
        border-radius: 0 0 15px 10px;
        font-weight: 700;
        color:#333;
        font-size: 28px;
      }
    }
  }
}
</style>
<template>
  <div class="container">
    <div class=" scroll-wrap">
      <div class="index-wrap" >
        <div class="banner">
          <banner :imgData="bannerList" @change="changeBanner"  ></banner>
        </div>
        <div class="index-nav">
          <index-dom
            :navlist="indexNavlist"
            @goPath="goPath"
            :items="3"
            >
          </index-dom>
          <div class="hr"></div>
        </div>
        <div class="content" style="margin-top:-70rpx;">
          <div class="content-list">
            <div class="list-header">
              <img class="icon" src="/static/imgs/remen.png" alt="">美图推荐
            </div>
            <div class ="list-body">
              <div class="show-top" @click="prevImage(meitu[0])" >
                <img mode="aspectFill" :src="meitu[0]" alt="">
              </div>
              <div class="show-bottom">
                <div class="show-list" @click="prevImage(meitu[1])">
                  <img mode="aspectFill" :src="meitu[1]" alt="">
                </div>
                <div class="show-list" @click="prevImage(meitu[2])" >
                  <img mode="aspectFill" :src="meitu[2]" alt="">
                </div>
              </div>
            </div>
          </div>
           <div class="hr"></div>
        </div>
        <div class="content">
          <div class="content-list">
            <div class="list-header">
              <img class="icon" src="/static/imgs/jingxuan.png" alt="">精选推荐
            </div>
            <no-data v-if="nodata"></no-data>
            <div class="ls-list">
              <div class="ls-item-wrap">
                <div class="ls-li" v-for="(item,index) in playerXd" :key="index" v-if="index%2==0">
                  <img class="ls-img-wrap" mode="widthFix" :src="item.imgs[0]" alt="" @click="lookoutImg(item.imgs[0],item.imgs)">
                  <div class="ls-txt-wrap" @click="goDetailPath(item)">{{item.title}}</div>
                </div>
              </div>
              <div class="ls-item-wrap">
                <div class="ls-li" v-for="(item,index) in playerXd" :key="index" v-if="index%2==1">
                  <img class="ls-img-wrap"  mode="widthFix" :src="item.imgs[0]" alt="" @click="lookoutImg(item.imgs[0],item.imgs)">
                  <div class="ls-txt-wrap"  @click="goDetailPath(item)">{{item.title}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import indexDom from '../../components/main/index'
import banner from '../../components/banner'
import noData from '../../components/noData'
import {getGonglue} from '../../server/gonglue'

export default {
  components:{
    indexDom,
    banner,
    noData
  },
  data () {
    return {
      userInfo: {},
      nodata:false,
      indexNavlist:[
        {
          name:"职业流派",
          img:"/static/imgs/zhuxian.png",
          path:'/pages/job_style/main'
        },
        {
          name:"新闻动态",
          img:"/static/imgs/zhixian.png",
          path:'/pages/news/main'
        },
        {
          name:"奇遇和副本",
          img:"/static/imgs/qiyu.png",
          path:'/pages/task/main'
        },
        // {
        //   name:"装备展台",
        //   img:"/static/imgs/yaji.png",
        //   path:'/pages/slitTask/main'
        // },
        // {
        //   name:"活动福利",
        //   img:"/static/imgs/tansuo.png",
        //   path:'/pages/activityList/main'
        // }
      ],
      userInfo:{
        avatarUrl:"",
        nickName:""
      },
      bannerList:[
        {
          src:'https://n.netease.com/data/attachment/portal/201807/27/133428hcwzowg1e6rrfnwm.jpg',
        },
        {
          src:'https://n.netease.com/data/attachment/portal/201807/26/170507jp0311eb1qxqfjxl.jpg',
        },
        {
          src: 'https://n.netease.com/data/attachment/portal/201807/26/102109ux9y8o4t54b1vttz.jpg'
        },
        {
          src: 'https://n.netease.com/data/attachment/portal/201807/25/133236hppw6mll1pzx64n4.png'
        },
        {
          src: 'https://nie.res.netease.com/r/pic/20180620/b5352db9-3508-433f-8320-d9eb64fe4510.jpg'
        },
        {
          src: 'https://nie.res.netease.com/r/pic/20180620/7b47a939-3147-4b8f-9901-30f5c8a160d4.jpg'
        }
      ],
      goodList:[],
      playerXd:[],
      meitu:[
        "https://i.loli.net/2018/08/26/5b82182460fad.jpg",
        "https://i.loli.net/2018/08/26/5b8218246c2c4.jpg",
        "https://i.loli.net/2018/08/26/5b8218249e58e.jpg",
        "https://i.loli.net/2018/08/26/5b821824b0e74.jpg",
        "https://i.loli.net/2018/08/26/5b82193882b8b.jpg",
        "https://i.loli.net/2018/08/26/5b82193885976.jpg",
        "https://i.loli.net/2018/08/26/5b82193887624.jpg",
        "https://i.loli.net/2018/08/26/5b82193898ba3.jpg",
        "https://i.loli.net/2018/08/26/5b8219389f7ed.jpg"
      ],
      typeGood:[1,2,3,4,5,6]
    }
  },
  mounted(){
    this.getData()
  },
  methods: {
    lookoutImg(cur,imgs){
      wx.previewImage({
        current:cur,
        urls:imgs
      })
    },
    goDetailPath(item){
      wx.navigateTo({
        url:"/pages/strategyDetail/main?_id="+item.id
      })
    },
    getData(cb){
      getGonglue({page:1},(er,res)=>{
        if(res && res.data && res.data.info && res.data.info.length){
            this.playerXd=res.data.info
            this.loader=false
        }else{
            this.loader=false
        }
      })
    },
    prevImage(img){
      wx.previewImage({
        current:img,
        urls:this.meitu
      })
    },
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.getUserInfo({
        success:(res)=>{
          this.userInfo=res.userInfo
        }
      })
    },
    isLogin(){

    },
    clickHandle (msg, ev) {
      // console.log('clickHandle:', msg, ev)
    },
    goPath(model){
      let url=model.path
      wx.navigateTo({
        url
      })
    },

    changeBanner(index){ },
    golistPath(model){
      wx.navigateTo({
        url:'/pages/article/main?_id='+model.id+'&_type='+model._type
      })
    }
  },
  created () {
    this.isLogin()
  }
}
</script>
