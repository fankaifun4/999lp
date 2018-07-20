<style lang="scss" scoped>
 .container-bg{
    position: absolute;
    z-index: -1;
    top:0;
    bottom:0;
    left:0;
    right:0;
  }
  .bg-jiul{
    width:100%;
    height:100%;
    position: absolute;
  }
  .bg-list{
    position: absolute;
    box-sizing: border-box;
    overflow: hidden;

    left:35rpx;
    right:35rpx;
    bottom:35rpx;
    top:35rpx;
    border:1rpx solid #fff;
    .head{
      height:80rpx;
      line-height: 80rpx;
      background:rgba(121,134,164,.6);
      border-bottom:5rpx solid #c90;
      font-size: 28rpx;
      color:#333;
      text-align: center;
      font-weight: 700;
    }
    .news-list{
      background-image:linear-gradient(rgba(255,255,255,.5) 50%, rgba(255,255,255,.2));
      overflow-x: hidden;
      overflow-y: scroll;
      position: absolute;
      top:82rpx;
      width:100%;
      bottom:0;
      .new-list-sroll{
      }
    }
    .news-li{
      position: relative;
      font-size:26rpx;
      color:#333;
      border-bottom:1rpx dashed #666;
      padding:25rpx 20rpx 25rpx 60rpx;
      &:before{
        background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDI3MTc5RUM2NThCMTFFODlFMTlFRjM1NUYzQjZGODQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDI3MTc5RUQ2NThCMTFFODlFMTlFRjM1NUYzQjZGODQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMjcxNzlFQTY1OEIxMUU4OUUxOUVGMzU1RjNCNkY4NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMjcxNzlFQjY1OEIxMUU4OUUxOUVGMzU1RjNCNkY4NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PudloYgAAACgSURBVHjaYqyvLWdAAgpAvBCI44H4AQMaaGjqYCAEmNAM2w/Ez6G0AgMZgAnNsG4gjoDSZBnKgmbYNKg4iP4PFXfE5n1cgBEYhgeh3ozAIr8ciKWA2B5qAQOWcGUE03UV/2EGKgLpfUDcBcTTkdRmADEoxpyA+D6xkcICVewENZQBaiiGYaSEIQOaoSDvmZNjGHqyuQ+NAElyDQMBgAADAAEpKw6VY+o8AAAAAElFTkSuQmCC');
        background-repeat: no-repeat;
        background-position: center;
        content: '';
        width: 40rpx;
        height: 18rpx;
        position: absolute;
        left: 10rpx;
        top: 25px;
      }
      .news-li-content{
        padding-top:15rpx;
      }
      .news-li-time{
        text-align: right;
        font-size:24rpx;
      }
    }
  }
</style>
<template>
  <div class="container">
    <div class="container-bg">
      <fix-bg></fix-bg>
      <img class="bg-jiul" mode="aspectFit" src="/static/imgs/jiul.png" alt="">
    </div>
    <div class="bg-list">
      <div class="head">新闻资讯</div>
      <div class="news-list">
          <div class="new-list-sroll">
            <div class="news-li" v-for="(item,index) in newsList" :key="index" @click="goNEW(item)">
            <div class="news-li-content">{{item.content}}</div>
            <div class="news-li-time">{{item.time}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import fixBg from '@/components/fixbg'
  export default{
    components:{
      fixBg
    },
    data(){
      return{
        newsList:[
          {
            time:"18-07-19",
            content:"《逆水寒》更新公告(版本18-07-18-17-34)",
            id:"1"
          },
          {
            time:"18-07-12",
            content:"《逆水寒》更新公告(版本18-07-11-16-16)",
            id:"2"
          },
          {
            time:"18-07-06",
            content:"使用外挂创建大量角色非法牟利处罚公告",
            id:"3"
          },
          {
            time:"18-07-05",
            content:"关于两个BUG的处理公告",
            id:"4"
          }
        ]
      }
    },
    mounted(){},
    methods:{
      goNEW(item){
        wx.navigateTo({
          url:"/pages/newsdescribe/main"
        })
      }
    }
  }
</script>
