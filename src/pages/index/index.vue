<style lang="scss" scoped>
.container{
  position:relative;
  overflow: hidden;
  background:#efefef;
  .nav-bt-bg{
    >img{
      width:100%;
      height:150rpx;
    }
  }
  .container-bg{
    position: absolute;
    z-index: -1;
    top:0;
    bottom:0;
    left:0;
    right:0;
    .body-bg{
      position:absolute;
      width:100%;
      height:100%;
    }
    .body-mm{
      position:absolute;
      width:750rpx;
      height:957rpx;
      left:-200rpx;
      bottom: 100rpx;
    }

  }

}

.mg-t18{
  margin-top: 18rpx;
}
.index-wrap{
  position: relative;
  z-index: 2;
  width:100%;
  height:100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
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
        justify-content: space-between;
        align-items: center;
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
    <div class="index-wrap" >
      <div class="banner">
        <banner :imgData="bannerList" @change="changeBanner"  >
        </banner>
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
                <img src="http://img.newyx.net/article/image/201806/15/d578b68836.png" alt="">
              </div>
              <div class="show-list">
                <img src="http://img0.pconline.com.cn/pconline/1707/28/9668270_57cbf6dd66_thumb.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content-list">
          <div class="list-header">
            <img class="icon" src="/static/imgs/jingxuan.png" alt="">精选文章
          </div>
          <div class="list-body">
            <div class="list" v-for="(item,index) in goodList" :key="key">
              <div class="show-pic">
                <img :src="item.src" mode="aspectFill" alt="">
              </div>
              <div class="show-cont">{{item.text}}</div>
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

export default {
  components:{
    indexDom,
    banner
  },
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      mainController:false,
      indexNavlist:[
        {
          name:"职业流派",
          img:"/static/imgs/zhuxian.png",
          path:'job_style/main'
        },
        {
          name:"新闻动态",
          img:"/static/imgs/zhixian.png",
          path:'news/main'
        },
        {
          name:"玩法解密",
          img:"/static/imgs/qiyu.png",
          path:'task/main'
        },
        {
          name:"装备展台",
          img:"/static/imgs/yaji.png"
        },
        {
          name:"活动福利",
          img:"/static/imgs/tansuo.png"
        }
      ],
      toView: 'red',
      scrollTop: 100,
      indexNewsList:[
        {
          title:"测试一波",
          time:"2018-7-20 16:24:32",
          id:"123"
        },
        {
          title:"测试一波",
          time:"2018-7-20 16:24:32",
          id:"123"
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
      goodList:[
        {
          src:"http://www.xinshoucun.com/c/d/file/2018-06-18_f/f6aecc4350e1bfb2b19af47d8235a20a.jpg",
          text:"水天相接，晨雾蒙蒙笼云涛。银河欲转，千帆如梭逐浪飘。梦魂仿佛回天庭，天帝传话善相邀。殷勤问：归宿何处请相告。"
        },{
          src:"http://img0.pconline.com.cn/pconline/1707/28/9668270_57cbf6dd66_thumb.jpg",
          text:"清明时节，春光满地，熏风洋洋。 玉炉中的残烟依旧飘送出醉人的清香。 午睡醒来，头戴的花钿落在枕边床上。"
        },{
          src:"http://www.5mouse.com/uploads/fetcher/20160902105211.jpg",
          text:"纷纷坠叶飘香砌。夜寂静，寒声碎。真珠帘卷玉楼空，天淡银河垂地。年年今夜，月华如练，长是人千里。"
        }
      ]
    }
  },

  methods: {
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
      let path='../'+model.path
      wx.navigateTo({
        url:path
      })
    },
    goPathIndex(){
     this.mainController=true
    },
    goPathMain(){
     this.mainController=false
    },
    changeBanner(index){

    }
  },
  created () {
    this.isLogin()
  }
}
</script>
