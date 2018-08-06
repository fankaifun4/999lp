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
    padding:0 15rpx;
    position:relative;
    margin-bottom:20rpx;
    .list-body{
      padding:0 20rpx 20rpx 20rpx;
    }
    .content-list{
      border-radius:10rpx 10rpx 0 0;
      border-bottom:1rpx solid #ccc;
      position:relative;
      background:#fff;
      .list-header{
        font-size:26rpx;
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
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .show-pic{
          width:220rpx;
          height:150rpx;
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
          font-size:28rpx;
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
            @goNewsPath="goNewsPath">
          </index-dom>
          <div class="hr"></div>
        </div>
        <div class="content" style="margin-top:-70rpx;">
          <div class="content-list">
            <div class="list-header">
              <img class="icon" src="/static/imgs/remen.png" alt="">热门推荐
            </div>
            <div class ="list-body">
              <div class="show-top">
                <img mode="aspectFill" src="http://i.17173cdn.com/2fhnvk/YWxqaGBf/cms3/OXuyLxbmdurwdru.jpg" alt="">
              </div>
              <div class="show-bottom">
                <div class="show-list">
                  <img mode="aspectFill" src="http://img.newyx.net/article/image/201806/15/d578b68836.png" alt="">
                </div>
                <div class="show-list">
                  <img mode="aspectFill" src="http://img0.pconline.com.cn/pconline/1707/28/9668270_57cbf6dd66_thumb.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
           <div class="hr"></div>
        </div>
        <div class="content">
          <div class="content-list">
            <div class="list-header">
              <img class="icon" src="/static/imgs/jingxuan.png" alt="">精选文章
            </div>
            <no-data v-if="nodata"></no-data>
            <div v-else class="list-body">
              <div class="list" v-for="(item,index) in goodList" :key="index" @click="golistPath(item)">
                <div class="show-pic">
                  <img :src="item.img" mode="aspectFill" alt="" @click.stop="lookoutImg(item.src)">
                </div>
                <div class="show-cont">
                  <div> {{item.title}} </div>
                  <div> {{item.synopsis}} </div>
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
import indexDom from '@/components/main/index'
import banner from '@/components/banner'
import noData from '@/components/noData'

import { goodList } from '../../server/home'
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
          name:"玩法整理",
          img:"/static/imgs/qiyu.png",
          path:'/pages/task/main'
        },
        {
          name:"装备展台",
          img:"/static/imgs/yaji.png",
          path:'/pages/slitTask/main'
        },
        {
          name:"活动福利",
          img:"/static/imgs/tansuo.png",
          path:'/pages/activityList/main'
        }
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
      goodList:[]
    }
  },
  mounted(){
    this.getData()
  },
  onPullDownRefresh(){
    this.getData(res=>{
      if(res){
        wx.stopPullDownRefresh()
      }
    })
  },
  methods: {
    getData(cb){
      goodList(res=>{
        if(res.statusCode == 200 ){
          if( res.data.info&& res.data.info.length  ){
            this.goodList = res.data.info
          }
        }
        cb && cb(res)
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
      console.log('clickHandle:', msg, ev)
    },
    goPath(model){
      let url=model.path
      wx.navigateTo({
        url
      })
    },
    
    changeBanner(index){

    },
    lookoutImg(url){
      wx.previewImage({
        current: url,
        urls:[url]
      })
    },
    golistPath(model){
      wx.navigateTo({
        url:'/pages/articleList/main?_id='+model._id+'&_type='+model._type
      })
    },

  },
  created () {
    this.isLogin()
  }
}
</script>
