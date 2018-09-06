<style scoped lang="scss">
  @import '../../../static/style/config.scss';
  .bc-sp{
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    flex: 1px;
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
      justify-content: center;
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
      margin-left: 30px;
      .share{
        width:150px;
        height:60px;
        margin-right:20px;
        font-size: 28px;
        line-height: 60px;
        background:#3498db;
        color: #fff;
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
        .zan{
          height:80rpx;
          overflow: hidden;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          img{
            width:40rpx;
            height:40rpx;
            margin-right:10px;
          }
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
    min-height: 400px;
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
  .show-watch{
    margin:0 15px 15px;
    padding:15px;
    height:40px;
    background:#fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img{
      width:30px;
      height:30px;
      margin-right:10px;
    }
  }
</style>

<template>
  <div class="bc-sp" >
    <div class="task-top">
      <div class="user">
        <div class="nickname fs-b">{{ masterInfo.title }}</div>
      </div>
      <div class="r-act" >
        <button class="share" open-type="share">分享</button>
      </div>
    </div>
    <div class="task-content">
      <no-data v-if="nodata"></no-data>
      <div class="tast-body">
          <loading-dom :isShow="loading"></loading-dom>
          <rich-text :nodes="article" type="node" class="rich-cont"></rich-text>
      </div>
    </div>
    <div class="show-watch">
      <img src="https://lg-24gqn7nu-1257021853.cos.ap-shanghai.myqcloud.com/icon_look.png" alt="">
      {{ masterInfo.watch }}
    </div>
  </div>
</template>
<script>
  import {getDetail,addZan} from  '../../server/community'
  import loadingDom from '../../components/loading'
  import noData from '../../components/noData'
  export default {
    components:{
      loadingDom,
      noData
    },
    data(){
      return {
        article:[],
        taskName:"",
        _id:1,
        comment:"",
        userInfo:null,
        masterInfo:{},
        loading:false,
        nodata:false
      }
    },
    mounted(options){
     this.getData()
    },
    onLoad(options){
      this._id=options._id
      this.userInfo=wx.getStorageSync('userInfo')
    },
    onShareAppMessage(){
      return{
        title:"逆水寒八卦："+ this.masterInfo.title,
        path: '/pages/communityDetail/main?_id='+this._id,
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
    computed:{
    },
    methods:{
      getData(){
        this.loading=true
        getDetail({
          _id:this._id
        },(er,res)=>{
            if(er){
              this.loading=false
              this.nodata=true
            }else{
              this.nodata=false
              this.masterInfo = res.data.info
              this.setRichText(this.masterInfo.content)
            }
        })
      },
      setRichText( template='' ){
        const regex = new RegExp('<img', 'gi');
        template = template.replace(regex, `<img style="width: 100%; height:auto"`);
        this.article=template
        this.loading=false
      },
      addZan(model){
        if(wx.getStorageSync('token')){
          if( model.isSupport ) return
          addZan({id:model.id,master:model.uid},(er,res)=>{
            if(res.data.code ===1){
              model.zan+=1
              model.isSupport = true
            }
          })
        }else{
          this.getSetting()
        }
      },
    }
  }
</script>
