<style scoped lang="scss">
.task-img{
  width:200rpx;
  height:100rpx;
  overflow: hidden;
  border-radius: 5rpx;
  float: left;
  margin-right:10rpx;
  img{
    width:100%;
    height:100%;
  }
}
.list-xj{
  color:#3498db;
}
.list-zj{
  color:#c00;
}
.list-dj{
  color:#CC0099;
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
      <!--小吉-->
      <div class="ct-list">
        <div class="ct-list-header">
          <img mode="aspectFit" class="icon" src="/static/imgs/remen.png" alt=""> 奇遇（小吉）
        </div>
        <div class="list-body" v-for="(item,index) in qiyuList.xj" :key="index" >
          <div class="list-body-title fs-b ts-d list-xj" @click="toDetail(item)">
            {{item.title}}
          </div>
        </div>
      </div>
      <!--小吉end-->

      <!--中吉-->
      <div class="ct-list">
        <div class="ct-list-header">
          <img mode="aspectFit" class="icon" src="/static/imgs/remen.png" alt=""> 奇遇（中吉）
        </div>
        <div class="list-body" v-for="(item,index) in qiyuList.zj" :key="index" >
          <div class="list-body-title fs-b ts-d list-zj" @click="toDetail(item)">
            {{item.title}}
          </div>
        </div>
      </div>
      <!--中吉end-->

      <!--大吉-->
      <div class="ct-list">
        <div class="ct-list-header">
          <img mode="aspectFit" class="icon" src="/static/imgs/remen.png" alt=""> 奇遇（大吉，旷世）
        </div>
        <div class="list-body" v-for="(item,index) in qiyuList.dj" :key="index" >
          <div class="list-body-title fs-b ts-d list-dj"  @click="toDetail(item)">
            {{item.title}}
          </div>
        </div>
      </div>
      <!--大吉 end -->
    </div>
  </div>
</template>
<script>
  import {getQiyulist} from '../../server/task'
  export default {
    data(){
      return {
        banner:"https://i.loli.net/2018/08/26/5b8247564b604.jpg",
        qiyuList:[],
        _type:1
      }
    },
    created(){
      this.getData()
    },
    methods:{
      getData(){
        getQiyulist((er,res)=>{
          this.qiyuList = res.data
        })
      },
      toDetail(item){
        wx.navigateTo({
          url:'/pages/taskDetail/main?taskName='+item.title+'&_type='+item._type+'&_id='+item.id
        })
      },
      lookImg(url){
        wx.previewImage({
            current: url,
            urls:[url]
        })
      }
    }
  }
</script>
