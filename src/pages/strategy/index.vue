<style scoped lang="scss">
  .wrap{
    overflow: hidden;
    flex: 1;
  }
  .top-banner{
    width:100%;
    height: 100%;
    overflow: hidden;
    >img{
      width:100%;
      height: 100%;
    }
  }
  .nav-wrap{
    padding:15rpx;
  }
  .nav-list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:20rpx;
    .nav-item{
      flex: 1;
      position: relative;
      .img{
        width:100%;
        height:150rpx;
        border-radius: 8rpx;
        overflow: hidden;
        >img{
          border-radius: 8rpx;
          overflow: hidden;
          width:100%;
          height: 100%;
        }
      }
      .text{
        margin-top:15rpx;
        font-size: 30rpx;
        text-align: center;
      }

      &:first-child{
        margin-right: 10rpx;
      }
    }
  }
  .task-titles{
    font-size: 30px;
    margin-bottom:15rpx;
  }
  .task-show-img{
    display: flex;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;
    .flex1{
      flex: 1 !important;
    }
    .lg-left{
      flex:.6;
      height:300rpx;
      img{
        width:100%;
        height:100%;
      }
    }
    .lg-right{
      flex:.38;
      height:300rpx;
      .height-cover{
        overflow: hidden;
        height:300rpx !important;
        >img{
          width:100%;
          height:100%;
        }
      }
      .img-r{
        overflow: hidden;
        height:145rpx;
        &:first-child{
          margin-bottom:10rpx;
        }
        >img{
          width:100%;
          height:100%;
        }
      }
    }
  }
</style>
<template>
  <div class="wrap">
    <scroll-view scroll-y style="height: 100%" @scrolltolower="scrolltolower">
      <div class="ct-t">
        <div class="top-banner">
          <img class="top-bgs" mode="aspectFill" :src="banner" alt="">
        </div>
      </div>
      <div class="ct-b">
        <div class="ct-list">
          <div class="ct-list-header">
            <img mode="aspectFit" class="icon" src="/static/imgs/remen.png" alt=""> 副本攻略
          </div>
          <div class="list-body"  v-for="(item,index) in playerXd" :key="index" >
            <div class="list-body-title">
              作者：{{item.nickname}}
            </div>
            <div class="list-body-items">
              <div class="task-titles fs-b" @click="goDetailPath(item)">{{item.title}}</div>
              <div class="task-show-img" >
                <div class="lg-left" :class="{flex1:item.imgs.length<2}" @click="lookoutImg(item.imgs[0],item.imgs)">
                  <img mode="aspectFill" :src="item.imgs[0]" alt="">
                </div>
                <div class="lg-right" v-if="item.imgs.length>1">
                  <div class="img-r" :class="{'height-cover':item.imgs.length==2}" v-if="item.imgs.length>1"   @click="lookoutImg(item.imgs[1],item.imgs)" ><img  mode="aspectFill" :src="item.imgs[1]" alt=""></div>
                  <div class="img-r" v-if="item.imgs.length>2"  @click="lookoutImg(item.imgs[2],item.imgs)"><img  mode="aspectFill" :src="item.imgs[2]" alt=""  ></div>
                </div>
              </div>
            </div>
          </div>
          <load-dom :isShow="loader"></load-dom>
        </div>
      </div>

    </scroll-view>
  </div>
</template>

<script>
  import indexDom from '@/components/main/index'
  import loadDom  from '@/components/loading'
  import {getGonglue} from '../../server/gonglue'
  export default {
    components:{
      indexDom,
      loadDom
    },
    data(){
      return{
        banner:"https://nie.res.netease.com/r/pic/20180620/1f73d859-6f6e-4d46-a2c5-e7716f54df31.jpg",
        playerXd:[],
        page:1,
        loader:true
      }
    },
    create(){

    },
    mounted(){
      this.getData()
    },
    methods:{
      getData(){
        getGonglue({page:this.page},(er,res)=>{
           if(res && res.data && res.data.info && res.data.info.length){
             setTimeout(()=>{
               this.playerXd=res.data.info
               this.page+=1
               this.loader=false
             },500)
           }else{
             setTimeout(()=>{
              this.loader=false
             },500)
           }
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
          url:"/pages/strategyDetail/main?_id="+item.id
        })
      },
      scrolltolower(){
       if(this.loader) return
        this.loader=true
        this.getData()
      }
    }
  }
</script>
