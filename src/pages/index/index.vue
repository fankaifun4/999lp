<style lang="scss" scoped>
.container{
  position:relative;
  .body-bg{
    position:absolute;
    width:100%;
    height: 100%;
    z-index: 1;
  }
  .body-mm{
    position:absolute;
    height: 750rpx;
    bottom:20rpx;
    left:-30%;
    z-index: 1;
  }
}
.mg-t18{
  margin-top: 18rpx;
}
.index-wrap{
  position: relative;
  z-index: 2;
  width:100%;
  display: block;
  padding:0 20px;
  .nav-wrap {
    .nav-list{
      display:flex;
      align-items: center;
      justify-content:space-between;
    }
  }
  .nav-wrap{
    position: relative;
    padding:0 30rpx 30rpx 30rpx;
    .nav-list {
      padding-top:150rpx;
      z-index: 2;
      font-size:26rpx;
      .nav-item{
        width:105rpx;
        height:105rpx;
        color:rgba(74,81,110,1);
        font-weight: 700;
        padding:5rpx;
        overflow: hidden;
        border:4rpx solid rgba(74,81,110,1);
        border-radius: 50%;
        text-align: center;
        >img{
          width:60rpx;
          height:60rpx;
        }
      }
    }
    .nav-bt-bg{
      width:100%;
      position: absolute;
      height:80rpx;
      z-index: 1;
      >img{
        height:150rpx;
        width:100%;
      }
    }
  } 
  .content-body{
    padding:50rpx;
  }
}

</style>
<template>
  <div class="container">
    <img mode="aspectFit top" class="body-bg" src="/static/imgs/body.jpg" alt="">
    <img mode="aspectFit" class="body-mm" src="/static/imgs/imm.png" alt="">
    <div class="index-wrap">
        <div class="nav-wrap">
            <div class="nav-bt-bg">
              <img mode="center"  src="/static/imgs/nishuihan.png" alt="">
            </div>
            <div class="nav-list">
                <div class="nav-item">
                  <img src="" alt="">
                  <div>奇遇</div>
                </div>
                <div class="nav-item">
                  <img src="" alt="">
                  <div>主线</div>
                </div>
                <div class="nav-item">
                  <img src="" alt="">
                  <div>支线</div>
                </div>
                <div class="nav-item">
                   <img src="" alt="">
                  <div>雅集</div>
                </div>
                <div class="nav-item">
                  <img src="" alt="">
                  <div>探索</div>
                </div>
            </div>
        </div>
        <div class="content-body">
          
        </div>
    </div>
  </div>
</template>
<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card
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
          console.log(res)
        }
      })
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>
