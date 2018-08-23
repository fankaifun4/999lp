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
        banner:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532936097845&di=9c0b89fc759b3b59b5082915855bcf58&imgtype=0&src=http%3A%2F%2Fimage12.m1905.cn%2Fmapps%2Fuploadfile%2Fedu%2F2014%2F0805%2F2014080503140411360.jpg",
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
          console.log('111111111111111111111')
          this.qiyuList = res.data
          console.log(this.qiyuList)
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
