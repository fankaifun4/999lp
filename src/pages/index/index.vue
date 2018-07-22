<style lang="scss" scoped>
.container{
  position:relative;
  overflow: hidden;
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
  padding:0 20rpx;

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
    <div class="container-bg">
      <fixbg></fixbg>
      <img mode="aspectFit" class="body-mm" src="/static/imgs/xh.png" alt="">
      <div class="body-hudie"></div>
    </div>
    <div class="index-wrap" >
      <div class="nav-wrap" >
          <div class="nav-bt-bg">
            <img mode="center"  src="/static/imgs/nishuihan.png" alt="">
          </div>
      </div>
      
      <index-dom  
        :navlist="indexNavlist" 
        :newsList="indexNewsList"
        @goPath="goPath"
        @goNewsPath="goNewsPath">
      </index-dom>
    </div>
  </div>
</template>
<script>
import card from '@/components/card'
import fixbg from '@/components/fixbg'
import indexDom from '@/components/main/index'
export default {
  components:{
    card,
    fixbg,
    indexDom
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
          name:"任务解密",
          img:"/static/imgs/qiyu.png",
          path:'task_encry/main'
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
      }
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
    }
  },
  created () {
    this.isLogin()
  }
}
</script>
