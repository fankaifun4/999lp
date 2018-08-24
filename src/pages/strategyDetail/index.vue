<style scoped lang="scss">
  @import '../../../static/style/config.scss';
  .bc-sp{
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    flex: 1;
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
        font-weight: 700;
        font-size: 40px;
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
  <div class="container bc-sp" >
    <div class="task-top">
      <div class="user">
        <img class="avatar" :src="userInfo.avatarUrl" alt="" v-if="true">
        <div class="nickname">{{ dataInfo.title }}</div>
      </div>
      <div class="r-act">
        <div class="share" @click="shareTick">
          <img src="/static/imgs/share.png" alt="">
        </div>
        <div class="action" v-if="false">
          <div class="follow">已关注</div>
        </div>
      </div>
    </div>
    <div class="task-content">
      <div class="tast-body">
          <rich-text :nodes="article"></rich-text>
      </div>
    </div>
    <div class="fixed-btn" v-if="false">
      <div class="">
        <div class="share"><img mode="aspectFit" class="share-in" src="/static/imgs/share.png" alt=""></div>
      </div>
      <div class="long">
        <input type="text" v-if="!insertData" v-model="comment"  class="comment"  >
        <button class="sendMsg" v-if="comment.length<1">发送</button>
        <button class="sendMsg enabled" v-else @click="sendMsg">发送</button>
      </div>
    </div>
  </div>
</template>
<script>
  import  {getGonglueDetail} from '../../server/gonglue'
  export default {
    data(){
      return {
        article:[],
        taskName:"",
        _type:'1',
        _id:1,
        isloading: true,
        comment:"",
        userInfo:null,
        insertData:false,
        dataInfo:{}
      }
    },
    created(){

    },
    onLoad(options){
      this._id=options._id
      this.userInfo=wx.getStorageSync('userInfo')

      this.getData(this._id)
    },
    computed:{

    },
    methods:{
      getRichData( html ){
        let template= html
        const regex = new RegExp('<img', 'gi');
        template = template.replace(regex, `<img style="max-width: 98%;"`);
        this.article=template
        this.isloading=false
      },
      getData(id,_type){
        getGonglueDetail({
          id
        },(err,res)=>{
          this.dataInfo= res.data.info
          let template=this.dataInfo.content
          this.getRichData(template)
        })
      },
      shareTick(){
        wx.showShareMenu({
          withShareTicket:true,
          success:res=>{

          },
          fail:err=>{

          }
        })
      },
      sendMsg(){
        console.log(this.comment)
      }
    }
  }
</script>
