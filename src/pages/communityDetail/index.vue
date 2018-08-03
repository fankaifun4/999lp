<style scoped lang="scss">
  @import '../../../static/style/config.scss';
  .bc-sp{
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
  }
  .task-top{
    background:#fff;
    color: $black_q;
    box-sizing: border-box;
    border-bottom:1rpx solid #c2c2c2;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding:15rpx;
    box-sizing: border-box;
    height:150rpx;
    flex-shrink: 0;
    .user{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .avatar{
        width:100rpx;
        height: 100rpx;
        border-radius: 100%;
        overflow: hidden;
        margin-right: 20rpx;
      }
      .nickname{
        font-size: $fs_l;
        color:$black_s;
      }
    }
    .r-act{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .share{
        width:40rpx;
        height:40rpx;
        margin-right:20rpx;
        >img{
          width:100%;
          height:100%;
        }
      }
      .action{
        font-weight: 300;
        .follow{
          border:1rpx solid $orange_m;
          color:$orange_m;
          height:50rpx;
          line-height: 50rpx;
          padding:0 25rpx;
          border-radius: 25rpx;
        }
        .followed{
          color:$orange_s;
          height:50rpx;
          line-height: 50rpx;
          padding:0 25rpx;
        }

      }
    }
  }
  .task-content{
    background:#fff;
    border:1rpx solid #c9c9c9;
    margin:15rpx;
    padding:15rpx;
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    .tast-body{
      position: relative;
      box-sizing: border-box;
      .rich-cont{
        line-height: 60rpx;
        font-size: 28rpx;
      }
    }
  }
  .fixed-btn{
    border-top:1px solid #c2c2c2;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    padding:15rpx;
    background: #fff;
    height:100rpx;
    flex-shrink: 0;
    .long{
      display: flex;
      .comment{
        border-bottom: 1rpx solid #2c2c2c;
        height:60rpx;
        padding:0 15rpx;
        width:495rpx;
        margin-right:15rpx;
      }
      .sendMsg{
        height:60rpx;
        line-height: 60rpx;
        border-radius: 3rpx;
        font-size: 26rpx;
        margin-top:2rpx;
        &.enabled{
          background: $green_s;
          color:#fff;
        }
      }
    }
    .share{
      width:50rpx;
      height:50rpx;
      .share-in{
        width: 100%;
        height:100%;
      }
    }
  }

</style>

<template>
  <div class="bc-sp" >
    <div class="task-top">
      <div class="user">
        <img class="avatar" src="/static/imgs/qiyu_logo.jpg" alt="">
        <div class="nickname">{{ taskName }}</div>
      </div>
      <div class="r-act">
        <div class="share">
          <img src="/static/imgs/share.png" alt="">
        </div>
        <div class="action">
          <div class="follow">已关注</div>
        </div>
      </div>
    </div>
    <div class="task-content">
      <div class="tast-body">
          <rich-text :nodes="article" type="node" class="rich-cont"></rich-text>
      </div>
    </div>
    <div class="fixed-btn">
      <div class="">
        <div class="share"><img mode="aspectFit" class="share-in" src="/static/imgs/share.png" alt=""></div>
      </div>
      <div class="long">
        <input type="text"  class="comment" v-model="comment" >
        <button class="sendMsg enabled">发送</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        article:[],
        taskName:"",
        _type:'1',
        _id:1,
        isloading: true,
        comment:"",
        userInfo:null
      }
    },
    created(){
      this.getData()
    },
    onLoad(options){
      this.taskName=options.taskName
      this._type=options._type
      this._id=options._id
      this.userInfo=wx.getStorageSync('userInfo')
    },
    computed:{
    },
    methods:{
      getData(){
        let template=`
            <p style="text-align: center;"><img  style="width:300px;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533144364562&di=06fde70328cbba27a1cb9f4a1d243b9a&imgtype=0&src=http%3A%2F%2Fp5.qhimg.com%2Ft013b2a0ad9867d0a0c.jpg%3Fsize%3D2880x1920"/></p>
            <p style="text-align: center;">享受风雨给予的坚强</p>
            <p style="text-align: center;">含着泪细念婆娑仰望</p>
            <p style="text-align: center;">踌躇与路放之间浅着一声轻盈</p>
            <p style="text-align: center;">那是说走就走的旅行</p>
            <p style="text-align: center;">固执与释然之间锁着一次酩酊</p>
            <p style="text-align: center;">只觉宿人醉而我独醒</p>
            <p style="text-align: center;">孤调与琳琅之间拘着一扇心境</p>
            <p style="text-align: center;">映照着我们纯粹魂灵</p>
            <p style="text-align: center;">不安与落定之间飘着一封书信</p>
            <p style="text-align: center;">故乡等待着我的归期</p>
            <p style="text-align: center;">带上心中的诗 飞向远方</p>
            <p style="text-align: center;"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533144630413&di=e157267cfe85f0a834eac1bae3f276d9&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201202%2F05%2F20120205092808_satSd.jpg"/></p>
            <p style="text-align: center;">未曾与你相遇便让我无尽的痛苦</p>
            <p style="text-align: center;">时常一无所获只因这满身的惆怅</p>
            <p style="text-align: center;">总是苦苦追寻却还是孤独在路旁</p>
            <p style="text-align: center;">不想诗和远方依旧还停泊在过往</p>
            <p style="text-align: center;"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533144630412&di=a9f3967b4081a428a939d76a4447dbd7&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201404%2F10%2F20140410095926_zLTWY.jpeg"/></p>
          `
        const regex = new RegExp('<img', 'gi');
        template = template.replace(regex, `<img style="max-width: 100%;"`);

        this.article=template
        this.isloading=false
      }
    }
  }
</script>
