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
        font-size: 26rpx;
        text-align: center;
      }

      &:first-child{
        margin-right: 10rpx;
      }
    }
  }
  .task-titles{
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
  <div class="ct_w">
    <div class="ct-t">
      <div class="top-banner">
        <img class="top-bgs" mode="aspectFill" :src="banner" alt="">
      </div>
    </div>
    <div class="ct-b">
      <div class="ct-list">
          <div class="ct-list-header">
            <img mode="aspectFit" class="icon" src="/static/imgs/remen.png" alt=""> 玩法
          </div>
          <div class="nav-wrap">
            <div class="nav-list">
              <div class="nav-item" v-for="(item,index) in taskList" :key="index" @click="goPathType(item)">
                <div class="img"><img mode="widthFix" :src="item.img" alt=""></div>
                <div class="text">{{item.name}}</div>
              </div>
            </div>
          </div>
          <div class="hr"></div>
      </div>
      <div class="ct-list">
        <div class="ct-list-header">
          <img mode="aspectFit" class="icon" src="/static/imgs/remen.png" alt=""> 最新攻略
        </div>
        <div class="list-body"  v-for="(item,index) in playerXd" :key="index" >
          <div class="list-body-title">
            作者：{{item.name}}
          </div>
          <div class="list-body-items">
            <div class="task-titles ts-d" @click="goDetailPath(item)">{{item.title}}</div>
            <div class="task-show-img" >
              <div class="lg-left" :class="{flex1:item.img.length<2}" @click="lookoutImg(item.img[0],item.img)">
                <img mode="aspectFill" :src="item.img[0]" alt="">
              </div>
              <div class="lg-right" v-if="item.img.length>1">
                <div class="img-r" :class="{'height-cover':item.img.length==2}" v-if="item.img.length>1"   @click="lookoutImg(item.img[1],item.img)" ><img  mode="aspectFill" :src="item.img[1]" alt=""></div>
                <div class="img-r" v-if="item.img.length>2"  @click="lookoutImg(item.img[2],item.img)"><img  mode="aspectFill" :src="item.img[2]" alt=""  ></div>
              </div>
            </div>
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
        taskList:[
          {
            name:"奇遇",
            img:"http://img4.imgtn.bdimg.com/it/u=858488715,1255645831&fm=27&gp=0.jpg",
            path:'taskList/main',
            _type:1
          },
          {
            name:"副本攻略",
            img:"https://nie.res.netease.com/r/pic/20180620/02a4a8c4-38b3-43d4-b995-c316ec4534e6.jpg",
            path:'strategy/main',
            _type:3
          },
        ],
        playerXd:[
          {
            name:"饭饭",
            title:"逆水寒载酒行者奇遇任务攻略",
            _id:"11",
            _type:1,
            img:[
              "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2080635448,571458245&fm=27&gp=0.jpg",
              "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=659546193,3832164782&fm=27&gp=0.jpg",
            ]
          },
          {
            name:"饭饭",
            title:"逆水寒八奇珍宝奇遇任务攻略",
            _id:"12",
            _type:1,
            img:[
              "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1189882505,2206048616&fm=27&gp=0.jpg",
            ]
          }
        ]
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
