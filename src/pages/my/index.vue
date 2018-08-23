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
          我的社区
        </div>
        <div class="list-body">
          <div class="list-shequ">
            <img class="icon"  src="/static/imgs/icon/icon_gz.png" alt="">
            <div>我的关注</div>
          </div>
          <!--<div class="list-shequ">-->
            <!--<img class="icon"  src="/static/imgs/icon/icon_sw.png" alt="">-->
            <!--<div>我的食谱</div>-->
          <!--</div>-->
          <!--<div class="list-shequ">-->
            <!--<img class="icon" src="/static/imgs/icon/icon_st.png" alt="">-->
            <!--<div>我的学会</div>-->
          <!--</div>-->
          <div class="list-shequ">
            <img class="icon"  src="/static/imgs/icon/icon_msg.png" alt="">
            <div>我的消息</div>
          </div>
          <!--<div class="list-shequ">-->
            <!--<img class="icon"  src="/static/imgs/icon/icon_tz.png" alt="">-->
            <!--<div>我的帖子</div>-->
          <!--</div>-->
          <!--<div class="list-shequ">-->
            <!--<img class="icon"  src="/static/imgs/icon/icon_st.png" alt="">-->
            <!--<div>我的社团</div>-->
          <!--</div>-->
        </div>
      </div>
      <div class="ct-list" v-if="false">
        <div class="ct-list-header">
          我的服务
        </div>
        <div class="list-body" >
          <div class="list-shequ">
            <img class="icon"  src="/static/imgs/icon/icon_gz.png" alt="">
            <div>我的关注</div>
          </div>
          <div class="list-shequ">
            <img class="icon"  src="/static/imgs/icon/icon_sw.png" alt="">
            <div>我的食谱</div>
          </div>
          <div class="list-shequ">
            <img class="icon"  src="/static/imgs/icon/icon_yg.png" alt="">
            <div>义工互助</div>
          </div>
          <div class="list-shequ">
            <img class="icon"  src="/static/imgs/icon/icon_lc.png" alt="">
            <div>我的里程碑</div>
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
