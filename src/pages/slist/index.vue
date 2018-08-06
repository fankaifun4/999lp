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
          <img mode="aspectFit" class="icon" src="/static/imgs/remen.png" alt=""> {{taskName}}
        </div>
        <div class="list-body" v-for="(item,index) in taskXList" :key='index' >
          <div class="list-body-title fs-b ts-d" @click="toDetail(item)">
            {{item.name}}
          </div>
          <div class="list-body-items">
            <div class="task-img" @click="lookImg(item.img)">
              <img mode="aspectFill"  :src="item.img" alt="" v-if="item.img">
            </div>
            {{item.cont}}
          </div>
        </div>
      </div>
      <!--小吉end-->
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        taskName:"",
        _type:3,
        banner:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532936097845&di=9c0b89fc759b3b59b5082915855bcf58&imgtype=0&src=http%3A%2F%2Fimage12.m1905.cn%2Fmapps%2Fuploadfile%2Fedu%2F2014%2F0805%2F2014080503140411360.jpg",
        taskXList:[
          {
            name:"花下风流饮",
            cont:"甜水巷门口阿刚（491,649）对话进入剧本甜水巷，于春杏身旁桌上（496,696）右键千日醉，饮十次有几率触发，触发后没有任务，跟随红枫叶NPC听他说完即可。",
            _id:"1",
            _type:1,
            img:"http://thumb10.jfcdns.com/thumb/2018-07/bce5b3b31822d3ac_600_0.jpeg"
          },{
            name:"夜风拂红尘",
            cont:"剧本甜水巷梁妈右手楼上，在唐三仙（462,765）那里打坐。找“温不老”服用青云丹亦可直接飞上房顶。",
            _id:"2",
            _type:1,
            img:"http://thumb11.jfcdns.com/thumb/2018-07/bce5b3b31824f75a_600_0.jpeg"
          }
        ]
      }
    },
    onLoad(option){
      this.taskName=option.taskName
      this._type=option._type
    },
    methods:{
      toDetail(item){
        wx.navigateTo({
          url:'/pages/slitTask/main?taskName='+item.name+'&_type='+item._type+'&_id='+item._id
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
