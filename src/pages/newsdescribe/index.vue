<style scoped lang="scss">
  .inner-bg{
    width:100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: #f5f5f6;
  }
  .bg-list{
    box-sizing: border-box;
    overflow: hidden;
    background: #fff;
    padding:15rpx;
    margin:15rpx;
    flex: 1;
    overflow-y: scroll;
  }
  .list-box {
    text-align:justify ;
    line-height: 50rpx;

  }
  .artTitle{
    text-align: center;
    font-size:35rpx;
    padding:20rpx 10rpx;
    background: #fff;
    border-bottom:4rpx solid #c90915;
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
	<div class="inner-bg">
    <h1 class="artTitle">{{ dataDetail.title }}</h1>
    <div class="bg-list">
      <no-data v-if="nodata"></no-data>
      <div v-else class="list-box">
          <rich-text :nodes="newsData"></rich-text>
      </div>
    </div>
    <div class="show-watch">
      <img src="https://lg-24gqn7nu-1257021853.cos.ap-shanghai.myqcloud.com/icon_look.png" alt="">
      {{ dataDetail.watch }}
    </div>
  </div>
</template>
<script>
  import fixBg from '@/components/fixbg'
  import noData from '@/components/noData'
  import { newsDetail } from '../../server/news'
  export default {
    components:{
      fixBg,
      noData
    },
    data(){
      return{
        nodata:false,
        newsTitle:"新年快乐",
        newsData:null,
        dataDetail:{}
      }
    },
    onLoad(option){
      this.getData(option.id)
    },
    methods:{
      getData(id){
        newsDetail({id},(er,res)=>{
          if(res.data && res.data.info){
            this.dataDetail= res.data.info
            this.setNewsData(this.dataDetail.content)
            this.nodata=false
          }else{
            this.nodata=true
          }
        })

      },
      setNewsData(temp){
        const regex = new RegExp('<img', 'gi');
        temp = temp.replace(regex, `<img style="max-width: 98%;"`);
        this.newsData=temp
      }
    }

  }
</script>
