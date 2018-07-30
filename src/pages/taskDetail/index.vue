<style scoped lang="scss">
  .bc-sp{
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
  }

  .task-top{
    background:#c90915;
    height:100rpx;
    text-align: center;
    vertical-align: center;
    font-size: 40rpx;
    color:#fff;
    border-radius: 0 0 30rpx 30rpx;
    padding-top:20rpx;
    box-sizing: border-box;
  }
  .task-content{
    padding:15rpx;
    margin:15rpx;
    background:#fff;
    border-radius: 15rpx;
    overflow: hidden;
    flex: 1;
    border:1rpx solid #c9c9c9;
    .tast-body{
      position: relative;
      width:100%;
      height:100%;
      overflow-y:scroll;
    }
  }
</style>

<template>
  <div class="container bc-sp" >
    <div class="task-top">
      {{ taskName }}
    </div>
    <div class="task-content">
      <div class="tast-body">
          <div>
            <import src="/static/towxml/entry.wxml" />
            <!--<template is="entry" data="{{...article}}" />-->
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  import towxml from '../../../static/towxml/main'
  export default {
    data(){
      return {
        article:[],
        taskName:"",
        _type:'1',
        _id:1,
        isloading: true,
      }
    },
    created(){
      this.getData()
    },
    onLoad(options){
      this.taskName=options.taskName
      this._type=options._type
      this._id=options._id
    },
    computed:{
      towxml(){
        return new towxml()
      }
    },
    methods:{
      getData(){
        let html= this.towxml.toJson('<h1>Article title asdasdasdasdasdasdasdasdasd</h1>');
        this.article=html
        this.isloading=false
      }
    }
  }
</script>
