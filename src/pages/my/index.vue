<style scoped lang="scss">
  .top-banner{
    width:100%;
    height: 100%;
    overflow: hidden;
    >img{
      width:100%;
      height: 100%;
    }
  }
  .ct-list{
    border-radius: 15rpx;
    border:1rpx solid #ccc;
    box-sizing: border-box;
    padding:0 25rpx;
  }
  .nav-wrap{
    padding:15rpx;
  }
  .task-titles{
    margin-bottom:10rpx;
  }
  .list-shequ{
    padding:15rpx 20rpx;
    height: 80rpx;
    border-bottom:1rpx solid #efefef;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .icon{
      display: block;
      width:40rpx;
      height:40rpx;
      margin-right: 20rpx;
    }
  }
  .share{
    display: block;
    font-size: 30px;
    background: none;
    border:none;
    text-align: left;
    float: left;
  }
</style>
<template>
  <div class="ct_w">
    <div class="ct-t">
      <div class="top-banner">
        <img class="top-bgs" mode="aspectFill" :src="banner" alt="">
      </div>
    </div>
    <div class="ct-b">
      <div class="ct-list">
        <div class="ct-list-header">
          关于
        </div>
        <div class="list-body">
          <div class="list-shequ">
            <div>投稿联系：fankaifun4@qq.com</div>
          </div>
          <div class="list-shequ">
            <button class="share" open-type="share">分享一波</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import indexDom from '@/components/main/index'
  export default {
    components:{
      indexDom
    },
    data(){
      return{
        banner:"https://nie.res.netease.com/r/pic/20180620/1f73d859-6f6e-4d46-a2c5-e7716f54df31.jpg",
      }
    },
    create(){

    },
    onShareAppMessage(){
      return{
        title:"逆水寒攻略资料查询",
        path: '/pages/index/main',
        success: function (res) {
          // 转发成功
          console.log("转发成功:" + JSON.stringify(res));
        },
        fail: function (res) {
          // 转发失败
          console.log("转发失败:" + JSON.stringify(res));
        },
      }
    },
    mounted(){

    },
    methods:{
      goPathType(model){
        wx.navigateTo({
          url:"../"+model.path+'?taskName='+model.name+'&_type='+model._type
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
          url:"/pages/taskDetail/main?taskName="+item.name+'&_id='+item._id+'&type='+item._type
        })
      }
    }
  }
</script>
